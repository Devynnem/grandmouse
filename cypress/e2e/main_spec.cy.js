describe('Main page', () => {

  beforeEach(() => {
    cy.fixture("characterData.json").as("characterData")
      .intercept('GET', 'https://api.disneyapi.dev/character?page=60&pageSize=50', {
        statusCode: 200,
        fixture: "CharacterData"
      })
      .visit('http://localhost:3000');
  });

  it('should display a title', () => {
    cy.contains('h1', 'GrandMouse');
  });

  it('should display a welcome message', () => {
    cy.contains('p', 'Welcome new and existing grandparents to a place to keep up with the grandkids favorite character!')
  });

  it('should have 3 characters displayed', () => {
    cy.get('.characters-container')
      .get('.card').should('have.length', 3)
  })

  it('should have a card with a name of Queen Arianna', () => {
    cy.get('.card').last()
      .contains('h3', 'Queen Arianna')
  })

  it('should render a specific characters details once clicked', () => {
    cy.get('.card').last().click()
      .intercept('GET', 'https://api.disneyapi.dev/character/308')
      .get('.single-character-card')
  })

})