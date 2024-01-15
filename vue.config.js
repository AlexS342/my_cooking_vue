const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
      },
      '/sanctum/csrf-cookie': {
        target: 'http://localhost:8000',
      },
      '/login': {
        target: 'http://localhost:8000',
      },
      '/logout': {
        target: 'http://localhost:8000',
      },
    },
  }
})

