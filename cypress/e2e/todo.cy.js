describe('Todo App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    // Wait for the app to be fully loaded with retry
    cy.get('body', { timeout: 30000 }).should('be.visible');
    cy.get('h1', { timeout: 30000 }).should('contain', 'My Todo List');
  });

  it('should display the correct heading', () => {
    // Check that the heading exists and has the correct text
    cy.get('h1').should('be.visible');
    cy.get('h1').should('contain', 'My Todo List');
    cy.get('h1').should('have.text', 'My Todo List');
  });

  it('adds and removes a todo item', () => {
    // Wait for the input to be available and visible
    cy.get('input[placeholder="Add task"]').should('be.visible');
    
    // Type the todo item
    cy.get('input[placeholder="Add task"]').type('Write demo test{enter}');
    
    // Verify the todo was added
    cy.contains('Write demo test').should('be.visible');
    
    // Click the delete button (❌) for the first todo
    cy.get('button').first().click();
    
    // Verify the todo was removed
    cy.contains('Write demo test').should('not.exist');
  });
});
