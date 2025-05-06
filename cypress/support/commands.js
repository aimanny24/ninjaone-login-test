// Custom Cypress commands
Cypress.Commands.add('assertLoginFieldsVisible', () => {
    cy.get('input[id="email"]').should('exist');
    cy.get('input[id="password"]').should('exist');
    cy.contains('Sign in').should('exist');
  });
  
  Cypress.Commands.add('attemptEmptyLogin', () => {
    cy.contains('Sign in').click();
    cy.url().should('include', '/auth'); // Still on login page
  });

  Cypress.Commands.add('loginWithValidCredentials', () => {
    cy.get('input[id="email"]').type(Cypress.env('email'));
    cy.wait(2000); // Adding a wait for demo purposes, not recommended for production code
    cy.get('input[id="password"]').type(Cypress.env('password'));
    cy.wait(2000); // Adding a wait for demo purposes, not recommended for production code
    cy.contains('Sign in').click();
    cy.wait(5000); // Adding a wait for demo purposes, not recommended for production code
    cy.url().should('include', '/dashboard');
  });
  
  Cypress.Commands.add('loginWithInvalidCredentials', () => {
    cy.get('input[id="email"]').type(Cypress.env('invalidEmail'));
    cy.wait(2000); // Adding a wait for demo purposes, not recommended for production code
    cy.get('input[id="password"]').type(Cypress.env('invalidPassword'));
    cy.wait(2000); // Adding a wait for demo purposes, not recommended for production code
    cy.contains('Sign in').click();
    cy.wait(5000); // Adding a wait for demo purposes, not recommended for production code
    cy.contains(/Invalid username\/password\. Please contact your system administrator for assistance|Human verification failed\. Please try again or contact your system administrator for assistance/)
    .should('be.visible');
  });