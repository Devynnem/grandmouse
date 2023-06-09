describe('Main page', () => {

  beforeEach(() => {
    cy.fixture("characterData.json").as("characterData")
      .intercept('GET', 'https://api.disneyapi.dev/character?page=60&pageSize=50', {
        statusCode: 200,
        fixture: "CharacterData"
      })
    // cy.intercept("GET","https://api.disneyapi.dev/character/308", {
    //     statusCode: 200,
    //      fixture: "CharacterData",
    //   })
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
  });

  it('should see a single character card displayed', () => {
    cy.get('.card').last().click()
      .then((url) => {
        cy.log('Extracted URL:', 'https://api.disneyapi.dev/character/308'); // Log the extracted URL
        cy.visit('https://api.disneyapi.dev/character/308'); // Navigate to the extracted URL
      // Add additional assertions or actions on the new page if needed
    });
    //   .then((url) => {
    //     cy.request('https://api.disneyapi.dev/character/308'); // Navigate to the extracted URL
      // Add additional assertions or actions on the new page if needed
    // });
      // .get('div').get('.single-character-card')
      // .contains('h2', 'Queen Arianna')
      // .get('img')
  });

  // it('should render a specific characters details once clicked', () => {
  //   // cy.intercept('GET', 'https://api.disneyapi.dev/character/308')
  //   cy.get('.card').last().click()
  //     .get('.single-character-card')
  // });

  // it('should be able to go to Favorites', () => {
  //   cy.get('.favorites-btn').click()
  //     .get('div')
  //     .contains('h2','No Favorite Characters yet!')
  // });

})