//
//  EventEmitter.swift
//  SyncSound
//
//  Created by Isaac Snow on 2/28/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

import Foundation

struct Events {
  static let FoundPeer = "FoundPeer"
  static let LostPeer = "LostPeer"
  static let PeerConnecting = "PeerConnecting"
  static let PeerConnected = "PeerConnected"
  static let PeerConnectionFailed = "PeerConnectionFailed"
}

@objc(EventEmitter)
class EventEmitter: NSObject, RCTInvalidating {
  var bridge: RCTBridge?
  
  var events = Events.self
  
  func invalidate() {
    
  }
  
  @objc func dispatch(event: String, data: AnyObject) {
    guard let appDelegate = UIApplication.shared.delegate as? AppDelegate,
      let bridge = appDelegate.bridge else { return }
    
    bridge.eventDispatcher().sendAppEvent(withName: event, body: data)
  }
  
}
