//
//  ConnectionManagerBridge.m
//  SyncSound
//
//  Created by Isaac Snow on 2/26/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ConnectionManager, NSObject)

RCT_EXTERN_METHOD(fetchConnectableDevices:(RCTResponseSenderBlock) callback)

RCT_EXTERN_METHOD(connectToDevice:
                  (NSString *)name
                  callback: (RCTResponseSenderBlock)callback)

@end
