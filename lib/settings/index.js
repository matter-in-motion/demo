'use strict';
const path = require('path');
const inherits = require('util').inherits;
const MMSettings = require('matter-in-motion').Settings;

const Settings = function() {
  MMSettings.call(this);
};
inherits(Settings, MMSettings);

Settings.prototype.init = function() {
  Settings.super_.prototype.init.call(this);

  this.extensions = [
    'http',
    'websockets',
    'nunjucks'
  ];

  this.http = {
    port: 3000,
    host: '0.0.0.0'
  };

  this.websockets = {
    pingInterval: 20000
  };

  this.nunjucks = {
    path: path.join(this.core.root, 'templates')
  };
}

module.exports = Settings;
