'use strict';
module.exports = function(settings) {
  settings.core.debug = true;
  settings.core.logger.default.streams.push({ stream: process.stdout });
};
