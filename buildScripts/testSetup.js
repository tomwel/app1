//This file isn't traspiled, so must use CommonJs and ES5

//Register babel to transpile before our tests run.
require('babel-register');

//Disable webpack features that Mocha doesn't undestand.
require.extensions['.css'] = function(){};
