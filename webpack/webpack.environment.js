const path = require('path');

module.exports = {
  paths: {
    /* Path to source files directory */
    source: path.resolve(__dirname, '../'),

    /* Path to built files directory */
    output: path.resolve(__dirname, '../dist/'),

    docs: path.resolve(__dirname, '../docs/'),
  },
  server: {
    host: 'localhost',
    port: 8000,
  },
};
