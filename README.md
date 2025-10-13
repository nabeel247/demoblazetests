# Cypress E2E Tests for Demoblaze

This repository contains end-to-end (E2E) tests for [Demoblaze](https://www.demoblaze.com), an online electronics store.  
The tests cover login, product selection, adding items to the cart, verifying totals, and the purchase flow.

---

## 🛠 Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)
- Git

---

## ⚡ Installation & Run

1. **Clone the repository**

```bash
git clone https://github.com/nabeel247/demoblazetest.git
cd demoblazetest
```

2. **Install dependencies**
```
npm install
npm install @faker-js/faker --save-dev
```

3. **Setup environment variables (Secrets)**
Create a file 'cypress.env.json' at the root directory & add your secrets there
```
{
  "username": "your-username",
  "password": "your-password"
}
```

4. **Running Cypress Tests**
```
npx cypress open
```

5. **Running Cypress Tests**
- Click E2E Testing option
- Run any tests (login, purchaseLaptop, deleteLaptop, purchaseMultipleLaptops)

## 🛠 Intent behind these tests
I visualized the following tests are essential to be covered for functional testing 
- First test is a basic login test (where login is implemented globally in all tests but mainly assertions are added there)
- Second test 'purchaseLaptop' shows how to complete the flow of buying a single laptop
- Third test 'deleteLaptop' shows how to delete a product from the cart
- Fourth test 'purchaseMultipleLaptops' demonstrate the case for adding mulitple products to the cart, asserting the count & verifying that the total amount is correct
