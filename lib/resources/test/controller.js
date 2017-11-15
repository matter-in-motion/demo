'use strict';

const Controller = function() {
};

Controller.prototype.__init = function() {
};

Controller.prototype.get = function(data) {
  return data;
};

Controller.prototype.getPromise = function(data) {
  return Promise.resolve(data);
};

module.exports = Controller;
