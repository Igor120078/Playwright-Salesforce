# Playwright-Salesforce

Repository for Salesforce test automation Demo Project using Playwright

### Run with a specific Config File and specific Project and specific Tag

```
    npx playwright test tests/login.spec.ts --config playwright.config.ts --project=Desktop_Chrome --grep @Login
    npx playwright test tests/login.spec.ts --config playwright.config.ts --project=Tablet_Safari --grep @Login
```

### Run all the tests with a specific Config File and specific Project

```
    npx playwright test --config playwright.config.ts --project=Desktop_Edge
```
