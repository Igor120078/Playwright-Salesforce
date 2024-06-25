import { FullConfig, FullProject, FullResult, Suite, TestCase, TestResult, Reporter } from '@playwright/test/reporter';
import { influx, Point } from '../influxDb/influxDb';

class MyReporter implements Reporter {
	projectName: string;
	count = { total: 0, passed: 0, failed: 0, skipped: 0 };
	arr_err: any = [];
	onBegin(config: FullConfig, suite: Suite) {
		this.count['total'] = suite.allTests().length;
		// this.projectName = config.projects[0].name;
	}

	onTestBegin(test: TestCase, result: TestResult) {
		const project: FullProject | undefined = test.parent?.project();
		this.projectName = project ? project.name : '';
	}

	async onTestEnd(test: TestCase, result: TestResult) {
		await this.collectStatus(result);
	}

	async onEnd(result: FullResult) {
		//time duration to execute
		console.log(`Total duration: ${result.duration}`);
		if (this.count['failed'] > 0) {
			this.arr_err.map(function (e: any) {
				console.log(e[0]['message']);
			});
		}
		//add the point for influx db
		const status = new Point('QA')
			.tag('Status', 'UI Cases')
			.tag('Project', this.projectName)
			.intField('Total', this.count['total'])
			.intField('Passed', this.count['passed'])
			.intField('Failed', this.count['failed'])
			.intField('Skipped', this.count['skipped']);
		await influx.writeMeasurement(status);

		//add the time duration
		const duration = new Point('QA').tag('Duration', 'time').floatField('Time', result.duration);
		await influx.writeMeasurement(duration);

		await influx.closeApi();
	}

	async collectStatus(status: TestResult) {
		switch (status.status) {
			case 'failed':
			case 'timedOut':
				this.count['failed'] += 1;
				this.arr_err.push(status.errors);
				break;
			case 'skipped':
				this.count['skipped'] += 1;
				break;
			case 'passed':
				this.count['passed'] += 1;
				break;
		}
	}
}

export default MyReporter;
