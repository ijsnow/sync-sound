//
//  EventEmitterBridge.m
//  SyncSound
//
//  Created by Isaac Snow on 2/28/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>
#import "AppDelegate.h"

@interface RCT_EXTERN_MODULE(EventEmitter, NSObject)

RCT_EXTERN_METHOD(foundPeer:(NSDictionary *)deviceData)
RCT_EXTERN_METHOD(lostPeer:(NSDictionary *)deviceData)

@end
