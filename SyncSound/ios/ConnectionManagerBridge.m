//
//  ConnectionManagerBridge.m
//  SyncSound
//
//  Created by Isaac Snow on 2/26/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import "AppDelegate.h"

@interface RCT_EXTERN_MODULE(ConnectionManager, NSObject)

RCT_EXTERN_METHOD(findPeers:(RCTResponseSenderBlock) callback)
RCT_EXTERN_METHOD(stopFinding:(RCTResponseSenderBlock) callback)

RCT_EXTERN_METHOD(connectToPeer:(NSString *)name)

@end
