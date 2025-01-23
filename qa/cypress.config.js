const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {},
		viewportWidth: 1440, //macbook-15
		viewportHeight: 900,
		video: false,
		baseUrl: 'http://localhost:5173',
		specPattern: 'cypress/e2e/**-test.js',
		experimentalWebKitSupport: true,
	},
})
