
var exec = require('cordova/exec');

var PLUGIN_NAME = 'MiPlugin';

var MiPlugin = {
  showMessage: function (name, successCallback, errorCallback){
        exec(successCallback, errorCallback, PLUGIN_NAME, "showMessage", [name]);
  }
};

module.exports = MiPlugin;
