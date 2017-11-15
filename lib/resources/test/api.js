'use strict';

module.exports = {
  __expose: true,

  get: function() {
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

      call: (auth, data) => this.get(data)
    };
  },

  getPromise: function() {
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

      call: (auth, data) => this.getPromise(data)
    };
  }
};
