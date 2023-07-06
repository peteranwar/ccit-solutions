/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const path = require('path');


const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    fiber: false,
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    API_UR : "https://menuapp.ai/api/",
  },
  images: {
    domains: ['menuapp.ai', 'menuappplivvve.s3.eu-central-1.amazonaws.com']
  },
}


module.exports = withPlugins([
], nextConfig)