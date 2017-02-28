//
//  ConnectionManager.swift
//  SyncSound
//
//  Created by Isaac Snow on 2/26/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

import Foundation

@objc(ConnectionManager)
class ConnectionManager: NSObject {
  
  @objc func fetchConnectableDevices(_ callback: RCTResponseSenderBlock) -> Void {
    NSLog("Fetch P2P devices")
    let response = JSResponse()
    
    response.response = ["Grady's phone"] as AnyObject?
    
    callback(response.toRes())
  }
  
  @objc func connectToDevice(_ name: String, callback: RCTResponseSenderBlock) -> Void {
    NSLog("Connect to %@", name)
    
    let response = JSResponse()
    
    response.error = "This is an error"
    
    let res: [String: AnyObject] = [
      "success": false as AnyObject,
      "name": name as AnyObject
    ]
    
    response.response = res as AnyObject?
    
    callback(response.toRes())
  }
  
}
