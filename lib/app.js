'use strict';
const inherits = require('util').inherits;
const MMApp = require('matter-in-motion').App;

const App = function(options) {
  MMApp.call(this, options);
};
inherits(App, MMApp);

App.prototype.didStart = function() {
  this.printUnits();
  const env = this.units.require('templates.nunjucks');

  this.use('/', (req, res) => {
    res.status(200)
    res.set('Content-Type', 'text/html')
    res.send(env.render('index.html'));
  });
};


module.exports = App;
