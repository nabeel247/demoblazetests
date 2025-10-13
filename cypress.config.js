const { defineConfig } = require("cypress");

require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.demoblaze.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});