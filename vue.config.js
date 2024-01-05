const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/my_cooking/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        // pathRewrite: {'^/api': ''},
      },
    },
  }
})

