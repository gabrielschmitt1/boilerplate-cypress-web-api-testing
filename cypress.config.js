const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    video: false,
    chromeWebSecurity: false,
    viewportWidth: 1200,
    viewportHeight: 780,
    experimentalRunAllSpecs: true,
    hideXhr: true,

    setupNodeEvents(on, config) {
      const environmentName = config.env.environmentName || 'local'
      const environmentFilename = `./cypress/config/${environmentName}.settings.json`
      const settings = require(environmentFilename)

      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl
      }
      if (settings.env) {
        config.env = {
          ...config.env,
          ...settings.env,
        }
      }

      return config
    }
  }
})