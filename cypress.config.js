const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://app.ninjarmm.com",
    supportFile: "cypress/support/e2e.js"
  }
});
