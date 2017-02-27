//
//  ConnectionManagerBridge.m
//  SyncSound
//
//  Created by Isaac Snow on 2/26/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>

@interface RCT_EXTERN_MODULE(ConnectionManager, NSObject)

RCT_EXTERN_METHOD(fetchConnectableDevices)
RCT_EXTERN_METHOD(connectToDevice: (NSString *)name)

@end
