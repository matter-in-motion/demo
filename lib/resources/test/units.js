'use strict';
const Api = require('./api');
const Controller = require('./controller');

module.exports = function() {
  return {
    controller: new Controller(),
    api: new Api()
  };
};
