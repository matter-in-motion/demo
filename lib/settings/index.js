'use strict';
const inherits = require('util').inherits;
const MMSettings = require('matter-in-motion').Settings;

const Settings = function() {
  MMSettings.call(this);
};
inherits(Settings, MMSettings);

Settings.prototype.init = function() {
  Settings.super_.prototype.init.call(this);

  this.core.transports = {
    http: {
      port: 3000,
      host: '0.0.0.0',
      limit: null, // bytes, null for no limit
      encoding: 'utf8'
      /*cors: { //by default allows all cross domain requests to api
        allowOrigin: '*',
        allowMethods: 'POST, OPTIONS',
        allowHeaders: 'Authorization, Origin, Content-Type, Accept, MM',
        maxAge: 1728000
      },*/
      /*tls: {},*/
      /*static: {
        url: '/static',                        //static url
        root: this.core.root + '/static',      //root directory from which the static assets are to be served
        dotfiles: 'ignore',                    //option for serving dotfiles. Possible values are “allow”, “deny”, and “ignore”
        etag: true,                            //enable or disable etag generation
        extensions: false,                     //sets file extension fallbacks.
        index: 'index.html',                   //sends directory index file. Set false to disable directory indexing.
        lastModified: true,                    //set the Last-Modified header to the last modified date of the file on the OS.
        maxAge: 0,                             //set the max-age property of the Cache-Control header in milliseconds or a string in ms format
        redirect: true,                        //redirect to trailing “/” when the pathname is a directory.
        setHeaders: undefined                  //function for setting HTTP headers to serve with the file.
      }*/
    },

    websockets: {
      pingInterval: 20000,
      limit: null //bytes, null for no limit NOT IMPLEMENTED YET
    }
  };

}

module.exports = Settings;
