module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_PRO_API,
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api"
        }
      },
      '/addons': {
        target: process.env.VUE_APP_PRO_API,
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "^/addons": "/addons"
        }
      },
    }
  }
}