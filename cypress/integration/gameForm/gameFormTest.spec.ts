describe('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5000')
    })
    it('Add player', () => {
        cy.get('[data-cy=new-player-input]').type("Jola");
        cy.get('[data-cy=submit-player]').click();
        cy.get('[data-cy=start-game]').click();
    })
})