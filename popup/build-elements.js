const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/popup/runtime-es5.js',
    './dist/popup/runtime-es2015.js',
    './dist/popup/polyfills-es5.js',
    './dist/popup/polyfills-es2015.js',
    './dist/popup/main-es5.js',
    './dist/popup/main-es2015.js',
    './dist/popup/styles.css'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/popup.js');
})();