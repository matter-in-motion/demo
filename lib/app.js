'use strict';
const fs = require('fs');
const inherits = require('util').inherits;
const MMApp = require('matter-in-motion').App;

const index = fs.readFileSync('templates/index.html');

const App = function(options) {
  MMApp.call(this, options);
};
inherits(App, MMApp);

App.prototype.willStart = function() {
  this.addResources();

  this.use('/', (req, res) => {
    res.status(200)
    res.set('Content-Type', 'text/html')
    res.send(index);
  });
};


module.exports = App;
