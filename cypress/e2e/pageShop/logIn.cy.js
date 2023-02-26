describe('user login', () => {
  it('open the website', () => {
    cy.visit('https://shop.demoqa.com/my-account/')
  })

  it('should enter user credentials', () => {
    cy.get('input[id="username"]').type('farisbegovic1')
    cy.get('input[id="password"]').type('faris%%551234')
  })
  
  it('should click on login button', () => {
    cy.get('button[name="login"]').click()
  })

  it('shoud verify user is logged-in', () => {
    cy.contains("Hello farisbegovic1")
  })
})
