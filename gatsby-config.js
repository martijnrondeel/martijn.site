// Compile our .ts files with ts-node so Gatsby's NodeJS side can handle them
require('source-map-support').install();
require('ts-node').register({ files: true });

module.exports = require('./gatsby-config.ts');
