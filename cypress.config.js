const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://qamid.tmweb.ru',
    projectId: "2rseya",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
