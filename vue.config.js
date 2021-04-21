// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    devServer: {
      proxy: {
        "/monApp: ": {
          target: "http://localhost:8000",
          changeOrigin: true,
          logLevel: "debug",
        }
      }
    }
  };