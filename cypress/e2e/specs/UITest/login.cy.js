
import { loginPage } from '../pages/LoginPage';

describe('NinjaOne Login Page', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('displays login form', () => {
    cy.assertLoginFieldsVisible();
  });

  it('verify Email field is visible and editable', () => {
    loginPage.getEmailField().should('be.visible').type(Cypress.env('email'));
  });

  it('verify Password field is visible and masks input', () => {
    loginPage.getPasswordField().should('be.visible').type(Cypress.env('password'));
    loginPage.getPasswordField().should('have.attr', 'type', 'password');
  });

  it('verify Keep me signed in checkbox is visible and clickable', () => {
    loginPage.getStaySignedInCheckbox().should('be.visible').should('not.be.checked');
    loginPage.getStaySignedInCheckbox().check({ force: true });
  });

  it('verify Sign in button is visible and clickable', () => {
    loginPage.getSignInButton().should('be.visible').should('not.be.disabled').click();
  });

  it('should navigate to the Forgot Password page', () => {
    loginPage.getForgotPasswordLink().click();
    cy.url().should('include', '/auth/#/resetPassword');
  });

  it('should navigate to the Sign Up page', () => {
    loginPage.getSignUpLink().click();
    cy.url().should('include', '/auth/#/register');
  });

  it('logs in with Invalid credentials', () => {
    cy.loginWithInvalidCredentials();
  });

  it('fails to login with empty credentials', () => {
    cy.attemptEmptyLogin();
  });

  it('logs in with valid credentials', () => {
    cy.loginWithValidCredentials();
  });
});
