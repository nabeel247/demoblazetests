# 🧪 Cypress E2E Tests for Demoblaze

This repository contains an industry-standard End-to-End (E2E) automation test suite for [Demoblaze](https://www.demoblaze.com), an online e-commerce platform. The suite validates core user workflows, including authentication, shopping cart management, order checkout pipelines.

---

## 🛠 Prerequisites

Ensure you have the following baseline environments installed locally:

- [Node.js](https://nodejs.org/) (v24.21.0 or higher recommended)
- **npm** (bundled natively with Node.js)
- **Git** configuration engine

---

## ⚡ Installation & Execution Guide

### 1. Clone the Repository

```bash
git clone https://github.com/nabeel247/demoblazetests.git
cd demoblazetests
```

### 2. Install Project Dependencies

```bash
npm install cypress --save-dev
npm install @faker-js/faker --save-dev
```

### 3. Configure Local Environment Secrets

Create a file named `cypress.env.json` at the project's root directory to declare local test execution credentials.

```json
{
  "username": "your-username",
  "password": "your-password",
  "wrong_username": "any-random-username",
  "wrong_password": "any-random-password"
}
```

> ⚠️ **Security Note:** `cypress.env.json` is explicitly ignored by configuration tracking in `.gitignore` to safeguard runtime variables. Secrets for the CI workflow are safely stored in the repo. CI workflow can be triggered here:  
> [GitHub Actions Workflow](https://github.com/nabeel247/demoblazetests/actions/workflows/demoblaze_CI.yml)

### 4. Open Cypress Test Runner UI

Launch the interactive test orchestration control panel:

```bash
npx cypress open
```

### 5. Running the Suite via Runner UI

1. Select the **E2E Testing** module configuration options.
2. Select your preferred browser instance (e.g., Chrome, Electron).
3. Execute any targeted test specification files from the suite matrix.

---

## 🏗️ Project Architecture & Structure

This framework strictly follows the **Page Object Model (POM)** design pattern. Structural UI components and page-specific interactions are isolated completely from core test validation blocks, establishing highly scalable and maintainable testing suites.

```text
demoblazetest/
├── .github/workflows/
│   └── demoblaze_CI.yml       # GitHub Actions CI/CD pipeline automation
├── cypress/
│   ├── e2e/                   # Functional End-to-End Test Suite Specs
│   │   ├── deleteLaptop.cy.js
│   │   ├── emptyCartCheckout.cy.js
│   │   ├── login.cy.js
│   │   ├── purchaseLaptop.cy.js
│   │   └── purchaseMultipleLaptops.cy.js
│   ├── pages/                 # Page Objects (UI Selectors & Action Flows)
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   ├── HomePage.js
│   │   └── ProductPage.js
│   └── support/               # Framework Hooks & Custom Function Extensions
│       ├── commands.js        # Global custom reusable Cypress utility commands
│       └── e2e.js             # Automated root hook lifecycle parameters
├── cypress.config.js          # Core framework architecture definitions
└── cypress.env.json           # Active environment credential keys (Git-ignored)
```

---

## 🎯 Test Suite Coverage & Intent

I hand picked these tests to demonstrate the core business values in an e-commerce product like this. Used variation of tests like happy path, edge cases, and negative tests to show diveristy in my test suite. The current automated test coverage validates critical operational criteria across the user journey map:

- **`login.cy.js` (Authentication Verification):** Tests flows for valid & invalid login.
- **`purchaseLaptop.cy.js` (Happy Path Checkout):** Validates the end-to-end shopping experience, selecting a product card from the laptop category view and completing a verified checkout order.
- **`deleteLaptop.cy.js` (Cart State Modification):** Ensures products added to the basket drop out correctly when deleting rows, forcing dynamic adjustment metrics down to the sub-total elements.
- **`purchaseMultipleLaptops.cy.js` (Bulk Order Flow):** Validates bulk add behavior, asserting cumulative quantity badges alongside structural precision calculations for multi-item checkout totals.
- **:rotating_light:`emptyCartCheckout.cy.js`:rotating_light:(Edge-Case Guardrails):** Asserts edge cases against invalid checkouts, the test is intentionally left as failed in the CI to demonstrate that the condition in-place will catch an exising bug in the CI & it can be successful once the bug is fixed by the devs.

---

## 🏗️ Future tests

If I had more time, I would have covered

- \*\*`Other products`
- \*\*`pagination, navigation, banner etc`
- \*\*`API reponses`
- \*\*`Non functional requirements (like performance, load OR stress tests)`

## 🌟 Structural Highlights

### 1. Page Object Model (POM) Design

- **Separation of Concerns:** Functional element targets and click actions live in `cypress/pages/`. Tests query these structural descriptors dynamically.
- **Clean Maintenance:** Fragile changes to source classes or HTML IDs do not break test flows. Modifications remain localized to corresponding page object elements.

### 2. Framework Core Configurations

- **Base URL Isolation:** Application endpoint configurations are declared globally inside `cypress.config.js` to ensure environmental agility across staging or production test runs.
- **Custom Global Commands:** Redundant workflows (such as bypassing global login gates across speculative block steps) are managed inside `cypress/support/commands.js`.

### 3. Continuous Integration (CI/CD)

- Automated test executionjobs are managed via **GitHub Actions** under workflows inside `.github/workflows/demoblaze_CI.yml`.
- Regressions are caught instantly by configuring headless pipelines to trigger automatically across all code **Push**, **Pull Request**, or **Scheduled** integration points targeting main branch.
