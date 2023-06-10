describe('Main page', () => {

  beforeEach(() => {
      cy.intercept('GET', 'https://api.disneyapi.dev/character?page=60&pageSize=50', {
        statusCode: 200,
        fixture: "characterData.json"
      })
      cy.intercept("GET","https://api.disneyapi.dev/character/favorites", {
        statusCode: 200,
        fixture: "characterData.json",
      })
      .visit('http://localhost:3000');
  });

it('should be able to go to Favorites', () => {
  cy.get('.favorites-btn').click()
    .get('div')
    .contains('h2','No Favorite Characters yet!')
});

it('should be able to favorite a character', () => {
  cy.get('.card-div').get('.fav-btn').first().click()
  cy.get('.favorites-btn').click()
    .get('div')
    .contains('p', ".GIFfany")
});

it('should be able to tell you that the favorites button has already been clicked', () => {
  cy.get('.card-div').get('.fav-btn').first().click()
    .get('.card-div').get('.fav-btn').first().click()
  cy.contains('Already Favorited!')
});
});