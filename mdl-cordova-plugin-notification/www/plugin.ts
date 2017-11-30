/// <reference path="../typings/plugin.d.ts" />
/// <reference types="cordova" />

"use strict";

declare var zip: any;
declare var cordova: Cordova;

/**
 * This is the entry point to Cordova CodePush SDK.
 * It provides the following features to the app developer:
 * - polling the server for new versions of the app
 * - notifying the plugin that the application loaded successfully after an update
 * - getting information about the currently deployed package
 */
class MiPlugin {

    /**
     * The default UI for the update dialog, in case it is enabled.
     * Please note that the update dialog is disabled by default.
     */
    private static PLUGIN_NAME: string = 'MiPlugin';

    public showMessage(name: string, notifySucceeded?: any, notifyFailed?: any): void {
        cordova.exec(notifySucceeded, notifyFailed, MiPlugin.PLUGIN_NAME, "showMessage", [name]);
    }
}

/**
 * Defines the application statuses reported from the native layer.
 * !!! This enum is defined in native code as well, please make changes accordingly. !!!
 */
enum ReportStatus {
    STORE_VERSION = 0,
    UPDATE_CONFIRMED = 1,
    UPDATE_ROLLED_BACK = 2
}


var instance = new MiPlugin();
export = instance;
