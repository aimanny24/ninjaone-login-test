describe('NinjaOne Logout Test Suite', () => {
  beforeEach(() => {
    cy.session('validLogin', () => {
      cy.visit('/auth/#/login');
      cy.loginWithValidCredentials();
    });
  });

  it('should attempt to log out (MFA may block this test case)', () => {
    // You may need to adjust selector based on real UI
    cy.get('button').contains('Logout', { matchCase: false }).click();

    // Optional wait in case of redirect delay
    cy.wait(1000);

    // Assert user is redirected to login or session is cleared
    cy.url().should('include', '/login');
  });
});
