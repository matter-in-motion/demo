'use strict';
module.exports = function() {
  this.core.debug = true;
  this.core.logger.options.prettyPrint = true;
  this.core.logger.stream = undefined;
};
