describe('Main page', () => {

  beforeEach(() => {
      cy.intercept('GET', 'https://api.disneyapi.dev/character?page=60&pageSize=50', {
        statusCode: 200,
        fixture: "characterData.json",
      })
      .visit('http://localhost:3000');
  });

  it('should display a title', () => {
    cy.contains('h1', 'GrandMouse');
  });

  it('should display a welcome message', () => {
    cy.contains('p', 'Welcome new and existing grandparents to a place to keep up with the grandkids favorite character!')
  });

  it('should include favoriting instuctions', () => {
    cy.get('.favorite-message')
      .contains('p', 'Click Character\'s ❤️ to Favorite')
  });

  it('should have 3 characters displayed', () => {
    cy.get('.characters-container')
      .get('.card').should('have.length', 3)
  });

  it('should have a card with a name of Queen Arianna', () => {
    cy.get('.card').last()
      .contains('h3', 'Queen Arianna')
  });

  it('should see a single character card displayed', () => {
    cy.intercept("GET","https://api.disneyapi.dev/character/308", {
       statusCode: 200,
       fixture: "singleCharacter.json",
    })
    cy.get('.card').last().click()  
      .get('div').get('.single-character-card')
      .contains('h2', 'Queen Arianna')
      .get('img')
  });

  it('should be able to go to Favorites', () => {
    cy.intercept("GET","https://api.disneyapi.dev/character/favorites", {
      statusCode: 200,
      fixture: "singleCharacter.json",
   });
    cy.get('.favorites-btn').click()
      .get('div')
      .contains('h2','No Favorite Characters yet!')
  });

  it('should show an error message', () => {
    cy.visit('http://localhost:3000/error')
      .get(".message").contains('p', "Something went wrong, please try again!")
  });
});