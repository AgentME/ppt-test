'use strict';

require('babel-polyfill');
const ppt = require('page-parser-tree');

console.log('ppt loaded', ppt);
window._ppt = ppt;
