#import <Cordova/CDVPlugin.h>

@interface Notifications : CDVPlugin {
}

// Encabezados de las funciones del plugin
- (void) showMessage:(CDVInvokedUrlCommand*)command;

@end
