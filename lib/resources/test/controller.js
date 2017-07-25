'use strict';

const Controller = function() {
  this.db = null;
};

Controller.prototype.box = 'test';

Controller.prototype.__init = function(units) {
  // this.db = units.require('db');
};

Controller.prototype.get = function(data, cb) {
  cb(null, data);
};

module.exports = Controller;
