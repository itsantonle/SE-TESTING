import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3009/capycopy',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
