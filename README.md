# 🧪 NinjaOne Login Test (Cypress)

This project automates login/logout tests for the NinjaOne login page.

## Features
- Valid/invalid login test cases
- Environment-based credential management
- Logout functionality test
- CLI and UI test execution

## Prerequisites
- Node.js: https://nodejs.org/
- VS Code: https://code.visualstudio.com/

## Setup Instructions
1. Open folder in VS Code.
2. Run:
```bash
npm install
```
3. Launch Cypress Test Runner:
```bash
npx cypress open
```
4. Run tests in CLI:
```bash
npx cypress run
```

## Credentials
Stored securely in `cypress.env.json`.

## Folder Structure
```
ninjaone-login-test/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── logout.cy.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.json
├── cypress.env.json
├── package.json
└── README.md
```