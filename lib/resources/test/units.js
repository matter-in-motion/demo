'use strict';
const Api = require('./api');
const Controller = require('./controller');

module.exports = () => ({
  controller: new Controller(),
  api: new Api()
});
