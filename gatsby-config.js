// Compile our .ts files with ts-node so Gatsby's NodeJS side can handle them
require('ts-node').register({ files: true });

module.exports = require('./gatsby-config.ts');
