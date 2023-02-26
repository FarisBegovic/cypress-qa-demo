# cypress-qa-demo

This is demo project for ShopTools in Cypress.

Pre-requisites:
1. Install the Node (https://nodejs.org/en/download/)
2. Install the Cypress (https://docs.cypress.io/guides/getting-started/installing-cypress) 

How to run the tests: 
1. Navigate to the root folder
2. Run: `npm install` command
3. To execute the tests, enter the command: `npx cypress run`

Or, open the Cypress app with `npx cypress open` and run the tests manually in UI mode.

Cypress tests are located in e2e/pageShop folder. Tests are:
 - `logIn.cy.js` - testing the login flow
 - `order.cy.js` - testing the product ordering flow
 - `userRegistration.cy` - testing the new user registration flow

Manual test cases are written in the following document:
`Atlantbh - test cases.pdf`