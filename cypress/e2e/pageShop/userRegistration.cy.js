const username = "faris" + new Date().valueOf()
const email = username + "@gmail.com"

describe('user registration', () => {
  it('shoud open the website', () => {
    cy.visit('https://shop.demoqa.com/')
  })
  it('shoud open the login page', () => {
    cy.get('a[class="woocommerce-store-notice__dismiss-link"]').click()
    cy.xpath("//a[text()='My Account']").click()
  })

  it('shoud enter the credentials', () => {
    cy.get('input[id="reg_username"]').type(username)
    cy.get('input[id="reg_email"]').type(email)
    cy.get('input[id="reg_password"]').type('faris%%551234')
  })

  it('shoud click on register button', () => {
    cy.get('button[name="register"]').click()
  })

  it('shoud verify user is logged-in', () => {
    cy.contains("Hello " + username)
  })
})  

