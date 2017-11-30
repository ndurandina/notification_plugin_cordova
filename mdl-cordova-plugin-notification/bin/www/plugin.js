
 /******************************************************************************************** 
 	 THIS FILE HAS BEEN COMPILED FROM TYPESCRIPT SOURCES. 
 	 PLEASE DO NOT MODIFY THIS FILE DIRECTLY AS YOU WILL LOSE YOUR CHANGES WHEN RECOMPILING. 
 	 INSTEAD, EDIT THE TYPESCRIPT SOURCES UNDER THE WWW FOLDER, AND THEN RUN GULP. 
 	 FOR MORE INFORMATION, PLEASE SEE CONTRIBUTING.md. 
 *********************************************************************************************/ 


"use strict";
var MiPlugin = (function () {
    function MiPlugin() {
    }
    MiPlugin.prototype.showMessage = function (name, notifySucceeded, notifyFailed) {
        cordova.exec(notifySucceeded, notifyFailed, MiPlugin.PLUGIN_NAME, "showMessage", [name]);
    };
    MiPlugin.PLUGIN_NAME = 'MiPlugin';
    return MiPlugin;
}());
var ReportStatus;
(function (ReportStatus) {
    ReportStatus[ReportStatus["STORE_VERSION"] = 0] = "STORE_VERSION";
    ReportStatus[ReportStatus["UPDATE_CONFIRMED"] = 1] = "UPDATE_CONFIRMED";
    ReportStatus[ReportStatus["UPDATE_ROLLED_BACK"] = 2] = "UPDATE_ROLLED_BACK";
})(ReportStatus || (ReportStatus = {}));
var instance = new MiPlugin();
module.exports = instance;
