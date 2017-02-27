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
  
  @objc func fetchConnectableDevices() -> Void {
    NSLog("Fetch P2P devices")
  }
  
  @objc func connectToDevice(name: String) -> Void {
    NSLog("Connect to " + name)
  }
  
}
