const OfflinePlugin = require('offline-plugin');

module.exports = {
  type: 'preact-app',
  webpack: {
    extra: {
      devtool: 'eval',
      plugins: process.env.NODE_ENV === 'production' ? [new OfflinePlugin()] : []
    }
  }
}
