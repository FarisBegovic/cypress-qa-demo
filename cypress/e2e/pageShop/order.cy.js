const productName = "pink drop shoulder oversized t shirt"

describe('ordering the product', () => {
  it('should open the website', () => {
    cy.visit('https://shop.demoqa.com/')
  })

  it('shoud open the product', () => {
    cy.xpath('//a[text()="' + productName + '"]').click()
  })

  it('shoud select the product options', () => {
    cy.get('[id="pa_color"]').select('Pink')
    cy.get('[id="pa_size"]').select('36')
  })

  it('shoud add the product to the cart', () => {
    cy.xpath('//button[text()="Add to cart"]').click()
  })

  it('shoud verify product is added to cart', () => {
    cy.contains("“" + productName + "” has been added to your cart.")
    cy.get("span[class=cart-name-and-total]").should('contain', 'Cart(1)')
  })
})
