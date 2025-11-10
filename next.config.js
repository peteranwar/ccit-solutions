/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const path = require('path');
const nextTranslate = require('next-translate');
const withImages = require('next-images');
const locales = ['en', 'ar'];

const nextConfig = {
  reactStrictMode: true,
  // sassOptions: {
  //   fiber: false,
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    API_UR : "",
  }, 
  images: {
    domains: ['cs.ccit.sa', 'api.ccit.sa']
  },
  i18n: {
    locales: ['default', ...locales],
    defaultLocale: 'ar',
    localeDetection: false,
  },
}


module.exports = withPlugins([
  nextTranslate,
  withImages
], nextConfig)