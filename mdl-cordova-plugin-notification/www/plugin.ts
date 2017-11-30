/// <reference path="../typings/plugin.d.ts" />
/// <reference types="cordova" />

"use strict";

declare var cordova: Cordova;

class Notifications implements NotificationsCordovaPlugin {

    private static PLUGIN_NAME: string = 'Notifications';

    public showMessage(name: string, notifySucceeded?: any, notifyFailed?: any): void {
        cordova.exec(notifySucceeded, notifyFailed, Notifications.PLUGIN_NAME, "showMessage", [name]);
    }
}

var instance = new Notifications();
export = instance;
