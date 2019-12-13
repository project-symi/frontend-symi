const withCss = require('@zeit/next-css');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withImages, withCss], {
  target: 'serverless',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };
    return config;
  },
  distDir: './.next'
});
