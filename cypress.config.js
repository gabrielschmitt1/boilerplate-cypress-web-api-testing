// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://localhost",
    experimentalStudio: true,
    video: false,
    chromeWebSecurity: false,
    viewportWidth: 1200,
    viewportHeight: 780,
    experimentalRunAllSpecs: true,
    hideXhr: true,
    env: {
      db_name: process.env.CYPRESS_DB_NAME
    },
    setupNodeEvents(on, config) {
    },
  },
})