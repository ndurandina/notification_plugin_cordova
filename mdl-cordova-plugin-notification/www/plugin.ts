/// <reference path="../typings/plugin.d.ts" />
/// <reference types="cordova" />

"use strict";

declare var cordova: Cordova;

class MiPlugin implements MiCordovaPlugin {

    private static PLUGIN_NAME: string = 'MiPlugin';

    public showMessage(name: string, notifySucceeded?: any, notifyFailed?: any): void {
        cordova.exec(notifySucceeded, notifyFailed, MiPlugin.PLUGIN_NAME, "showMessage", [name]);
    }
}

var instance = new MiPlugin();
export = instance;
