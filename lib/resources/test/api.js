'use strict';

const Api = function() {
  this.calls = [ 'get' ];
}

Api.prototype.__init = function(units) {
  this.ctrl = units.require('controller');
};

Api.prototype.get = function() {
  return {
    auth: {
      provider: 'user',
      required: 'optional'
    },
    request: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          format: 'uuid'
        }
      },
      additionalProperties: false
    },

    call: (auth, data, cb) => {
      this.ctrl.get(data, cb);
    }
  };
};

module.exports = Api;
