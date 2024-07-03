# Playwright-Salesforce

Repository for Salesforce test automation Demo Project using Playwright

### Installation Playwright

```
    npm init playwright@latest
```

Run the install command and select the following to get started:

-   Choose between TypeScript or JavaScript (default is TypeScript)
-   Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
-   Add a GitHub Actions workflow to easily run tests on CI
-   Install Playwright browsers (default is true)

### Run all the tests

```
    npx playwright test
```

### Run all the tests with a specific Project

```
    npx playwright test --project=Desktop_Chrome
    npx playwright test --project=Desktop_Edge
    npx playwright test --project=Tablet_Safari
```

### Run with a specific Config File and specific Project and specific Tag

```
    npx playwright test tests/login.spec.ts --config playwright.config.ts --project=Desktop_Chrome --grep @Login
    npx playwright test tests/login.spec.ts --config playwright.config.ts --project=Tablet_Safari --grep @Login
```

### Run the test with a custom Reporter

```
    npx playwright test tests/example.spec.ts --reporter=./customReporters/customReporter.ts
    npx playwright test tests/example.spec.ts --reporter=./customReporters/influxReporter.ts
```

### Using Allure Reporter

#### Install Allure:

```
    npm i -D @playwright/test allure-playwright
    or
    brew install allure
```

#### Run tests with a Allure Reporter

```
    npx playwright test --project=Desktop_Chrome --reporter=line,allure-playwright
```

#### Generate an Allure report

```
    allure generate ./allure-results --clean
```

#### Open the Allure report

```
    allure open ./allure-report
```

### Custom Reporter for sending data to influxDB

#### Install influxdb-client:

```
    npm install @influxdata/influxdb-client
```

#### Run tests with an influxDB Reporter

```
    npx playwright test --project=Desktop_Chrome --reporter=./customReporters/influxReporter.ts,html
```
