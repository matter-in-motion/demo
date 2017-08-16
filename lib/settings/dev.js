'use strict';
module.exports = function() {
  this.core.debug = true;
  this.core.logger.default.streams.push({ stream: process.stdout });
};
