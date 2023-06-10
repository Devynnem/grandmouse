describe('Single Character page', () => {

  beforeEach(() => {

      cy.intercept('GET', 'https://api.disneyapi.dev/character?page=60&pageSize=50', {
        statusCode: 200,
        fixture: "characterData.json"
      })
    cy.visit('http://localhost:3000')
      .intercept('GET', 'https://api.disneyapi.dev/character/308', {
      statusCode: 200 })
      .get('.card').last().click()
      .get('.single-character-card')
  });

  it('should see a single character card displayed', () => {
    cy.get('.single-character-card')
      .contains('h2', 'Queen Arianna')
      .get('img')
  });

  it('should be able to go back to main menu', () => {
    cy.get('.header-logo').click()
      .intercept('GET', 'https://api.disneyapi.dev/character?page=60&pageSize=50')
      .get('.characters-container')
      .get('.card').should('have.length', 3)
  })

  it('should be able to go to Favorites', () => {
    cy.get('.favorites-btn').click()
      .get('div')
      .contains('h2','No Favorite Characters yet!')
  })

});