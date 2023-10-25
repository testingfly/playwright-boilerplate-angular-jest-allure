# E2E Testing Framework using Playwright - Angular, Jest, Allure Reporting

## Table of Contents
- [E2E Testing Framework using Playwright - Angular, Jest, Allure Reporting](#e2e-testing-framework-using-playwright---angular-jest-allure-reporting)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Scripts](#scripts)
  - [Usage](#usage)
  - [License](#license)

## Introduction

This is an End-to-End (E2E) testing framework for Angular applications using Playwright, Jest, and Allure reporting. E2E testing is essential to ensure that your Angular application works as expected across different environments and browsers. Playwright is a powerful tool for automating browser actions, Jest is a popular testing framework, and Allure reporting provides detailed and visually appealing test reports.

## Prerequisites

Before using this E2E testing framework, make sure you have the following tools and dependencies installed:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [npx](https://www.npmjs.com/package/npx)
- [Allure](https://docs.qameta.io/allure/)
- [Playwright](https://playwright.dev/)

You can install npx and Allure using Homebrew by running the following commands:

```bash
brew install npx
brew install allure
brew install angular-cli
```

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/testingfly/playwright-boilerplate-angular-jest-allure.git
```

2. Change your working directory to the project folder:

```bash
cd <project_folder>
```

3. Install the project dependencies:

```bash
npm install
```

## Scripts

This project includes several npm scripts in the `package.json` file to help you perform various tasks. Here are some of the key scripts:

- **start**: Start the Angular development server.
- **build**: Build the Angular application.
- **test**: Run Jest tests with code coverage and verbosity.
- **lint**: Run ESLint to check and fix code style issues.
- **format**: Use Prettier to format code.
- **prepare**: Install Husky hooks for pre-commit checks.
- **pre-commit**: Run format and lint checks before each commit.
- **test:e2e**: Run E2E tests using Playwright and generate Allure reports.
- **allure:report**: Serve Allure test reports.

## Usage

To run E2E tests using Playwright, use the following command:

```bash
npm run test:e2e
```

This command will execute E2E tests using Playwright with the specified configuration and generate Allure test reports. You can then view the reports using the following command:

```bash
npm run allure:report
```

## License

This E2E Testing Framework is released under the [MIT License](LICENSE). You are free to use, modify, and distribute it as needed. Please review the full license for more details.

If you encounter any issues or have questions, please feel free to [create an issue](<link_to_repository_issues>) on the repository or contact the project maintainers.

Happy testing!
