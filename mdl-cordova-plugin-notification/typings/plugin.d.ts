// Type definitions for Apache Cordova CodePush plugin.
// Project: https://github.com/Microsoft/cordova-plugin-code-push
//
// Copyright (c) Microsoft Corporation
// All rights reserved.
// Licensed under the MIT license.

interface Window {
    Notifications: NotificationsCordovaPlugin;
}

interface NotificationsCordovaPlugin {
    showMessage(name :string, packageSuccess: any, packageError?: any): void;
}