import type { FullConfig, FullResult, Reporter, Suite, TestCase, TestResult } from '@playwright/test/reporter';
import moment from 'moment';
import * as fs from 'fs';

class CustomJsonReporter implements Reporter {
	startedMessage = '';
	numberOfTestsMessage = '';
	failsMessage = '';
	passed = 0;
	failed = 0;
	skipped = 0;

	onBegin(config: FullConfig, suite: Suite) {
		this.startedMessage = `Test run started at ${moment().format('MMMM Do YYYY, h:mm:ss a')}`;
		this.numberOfTestsMessage = `Number tests cases to run: ${suite.allTests().length}`;
	}

	onTestBegin(test: TestCase, result: TestResult): void {
		console.log(`Execution of ${test.title} started.`);
	}

	onTestEnd(test: TestCase, result: TestResult) {
		switch (result.status) {
			case 'failed':
			case 'timedOut':
				this.addFailMessage(`❌ Test ${test.title} failed\n>${result.error?.message}`);
				this.failed++;
				break;
			case 'skipped':
				this.addFailMessage(`⚠️ Test ${test.title} skipped`);
				this.skipped++;
				break;
			case 'passed':
				this.passed++;
				break;
		}
	}

	async onEnd(result: FullResult) {
		const message = await this.buildMessage(result);
		// Implement Logic to send this message whenever it's need.

		fs.writeFileSync('./reports/test-report.json', message, 'utf8');
	}

	private addFailMessage(message: string) {
		this.failsMessage += `\n${message}`;
	}

	private async buildMessage(result: FullResult) {
		const duration = moment.duration(result.duration, 'milliseconds');
		const minutes = Math.floor(duration.asMinutes());
		const seconds = duration.seconds();
		const summaryMessage = this.failsMessage
			? `Tests Failed ❌\n${this.failsMessage}`
			: '👍 All tests passed successfully!';

		const testData = {
			startedMessage: this.startedMessage,
			numberOfTestsMessage: this.numberOfTestsMessage,
			duration: `Duration  of test run: ${minutes} minutes and ${seconds} seconds`,
			results: {
				passed: this.passed,
				failed: this.failed,
				skipped: this.skipped,
			},
			summary: summaryMessage,
		};
		/*
		`
            Test run results
            ---
            ${this.introMessage}
            ---
            Summary:
                - ⌛ Duration  of test run: ${minutes} minutes and ${seconds} seconds
                - 📦 Tests results: 
                - ✅ ${this.passed}
                - ❌ ${this.failed}
                - ⏩ ${this.skipped}
            
            ${this.failsMessage ? `Tests Failed ❌\n${this.failsMessage}` : '👍 All tests passed successfully!'}
                
        To see the full report, please visit our CI/CD piplene with reporter.`;
		*/
		return JSON.stringify(testData, null, 2);
	}
}

export default CustomJsonReporter;
