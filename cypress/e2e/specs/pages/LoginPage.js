// cypress/e2e/pages/LoginPage.js

class LoginPage {
    visit() {
      cy.visit('/auth/#/login');
    }
  
    getEmailField() {
      return cy.get('input[id="email"]');
    }
  
    getPasswordField() {
      return cy.get('input[id="password"]');
    }
  
    getStaySignedInCheckbox() {
      return cy.get('input[id="staySignedIn"]');
    }
  
    getSignInButton() {
      return cy.contains('button', 'Sign in');
    }
  
    getForgotPasswordLink() {
      return cy.contains('Forgot your password?');
    }
  
    getSignUpLink() {
      return cy.contains('Do not have an account?');
    }
  }
  
  export const loginPage = new LoginPage();
  