// cypress.config.js
const { defineConfig } = require('cypress')
require('dotenv/config')

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    video: false,
    chromeWebSecurity: false,
    viewportWidth: 1200,
    viewportHeight: 780,
    experimentalRunAllSpecs: true,
    env: { hideXhr: true },
    setupNodeEvents(on, config) {

      if (process.env.CYPRESS_ENVIROMENT === 'stg') {
        config.baseUrl = 'https://www.saucedemo.com'
        config.env = {
          env: 'stg',
          email: process.env.CYPRESS_EMAIL_STG,
          password: process.env.CYPRESS_PASSWORD_STG,
          api_url: process.env.CYPRESS_API_URL_STG,
          token: process.env.CYPRESS_TOKEN_STG,
        }
      } else if (process.env.CYPRESS_ENVIROMENT === 'dev') {
        config.baseUrl = 'URL_DEV'
        config.env = {
          env: 'dev',
          email: process.env.CYPRESS_EMAIL_DEV,
          password: process.env.CYPRESS_PASSWORD_DEV,
          api_url: process.env.CYPRESS_API_URL_DEV,
          token: process.env.CYPRESS_TOKEN_DEV,
        }
      } else {
        config.baseUrl = 'https://localhost:3000'
        config.env = {
          env: 'dev',
          email: process.env.CYPRESS_EMAIL,
          password: process.env.CYPRESS_PASSWORD,
          api_url: process.env.CYPRESS_API_URL,
          token: process.env.CYPRESS_TOKEN,
        }
      }

      return config
    },
  },
})