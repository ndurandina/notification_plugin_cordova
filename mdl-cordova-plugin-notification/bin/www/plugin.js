
 /******************************************************************************************** 
 	 THIS FILE HAS BEEN COMPILED FROM TYPESCRIPT SOURCES. 
 	 PLEASE DO NOT MODIFY THIS FILE DIRECTLY AS YOU WILL LOSE YOUR CHANGES WHEN RECOMPILING. 
 	 INSTEAD, EDIT THE TYPESCRIPT SOURCES UNDER THE WWW FOLDER, AND THEN RUN GULP. 
 	 FOR MORE INFORMATION, PLEASE SEE CONTRIBUTING.md. 
 *********************************************************************************************/ 


"use strict";
var Notifications = (function () {
    function Notifications() {
    }
    Notifications.prototype.showMessage = function (name, notifySucceeded, notifyFailed) {
        cordova.exec(notifySucceeded, notifyFailed, Notifications.PLUGIN_NAME, "showMessage", [name]);
    };
    Notifications.PLUGIN_NAME = 'Notifications';
    return Notifications;
}());
var instance = new Notifications();
module.exports = instance;
