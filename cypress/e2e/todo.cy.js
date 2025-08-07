describe('Todo App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('adds and removes a todo item', () => {
    cy.get('input').type('Write demo test{enter}');
    cy.contains('Write demo test');
    cy.get('button').click();
    cy.contains('Write demo test').should('not.exist');
  });
});
