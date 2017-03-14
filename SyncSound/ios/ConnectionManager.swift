//
//  ConnectionManager.swift
//  SyncSound
//
//  Created by Isaac Snow on 2/26/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

import Foundation
import MultipeerConnectivity

protocol MPCManagerDelegate {
  func foundPeer()
  
  func lostPeer()
  
  func invitationWasReceived(fromPeer: String)
  
  func connectedWithPeer(peerID: MCPeerID)
}

var SERVICE_TYPE = "syncsound-mpc"

@objc(ConnectionManager)
class ConnectionManager:  NSObject,
  MCSessionDelegate,
  MCNearbyServiceBrowserDelegate,
  MCNearbyServiceAdvertiserDelegate {
  
  let eventEmitter: EventEmitter = EventEmitter()
  
  var session: MCSession!
  var peer: MCPeerID!
  
  var browser: MCNearbyServiceBrowser!
  var isBrowsing: Bool = false
  
  var advertiser: MCNearbyServiceAdvertiser!
  var isAdvertising: Bool = false
  
  var delegate: MPCManagerDelegate?
  
  var foundPeers = [MCPeerID]()
  var blockedPeers = [MCPeerID]()
  var invitationHandler: ((Bool, MCSession?)->Void)!

  override init() {
    super.init()
    
    peer = MCPeerID(displayName: UIDevice.current.name)
    
    session = MCSession(peer: peer, securityIdentity: nil, encryptionPreference: MCEncryptionPreference.none)
    session.delegate = self
    
    browser = MCNearbyServiceBrowser(peer: peer, serviceType: SERVICE_TYPE)
    browser.delegate = self
    
    advertiser = MCNearbyServiceAdvertiser(peer: peer, discoveryInfo: nil, serviceType: SERVICE_TYPE)
    advertiser.delegate = self
  }
  
  // Remote peer changed state
  func session(_ session: MCSession, peer peerID: MCPeerID, didChange state: MCSessionState){
    switch state{
    case MCSessionState.connected:
      print("Connected to session: \(session)")
      delegate?.connectedWithPeer(peerID: peerID)
      
      let p: NSDictionary = [
        "name": peerID.displayName,
      ]
      
      eventEmitter.dispatch(event: eventEmitter.events.PeerConnected, data: p as AnyObject)
      
    case MCSessionState.connecting:
      print("Connecting to session: \(session)")
      
      let p: NSDictionary = [
        "name": peerID.displayName,
      ]
      
      eventEmitter.dispatch(event: eventEmitter.events.PeerConnecting, data: p as AnyObject)
      
    default:
      print("Did not connect to session: \(peerID.displayName) \(session)")
      
      let p: NSDictionary = [
        "name": peerID.displayName,
      ]
      
      eventEmitter.dispatch(event: eventEmitter.events.PeerConnectionFailed, data: p as AnyObject)
    }
  }
  
  // Received data from remote peer
  func session(_ session: MCSession, didReceive data: Data, fromPeer peerID: MCPeerID){
    let message = String(data: data, encoding: .utf8)
    print("MESSAGE: \(message)")
  }
  
  // Received a byte stream from remote peer
  func session(_ session: MCSession, didReceive stream: InputStream, withName streamName: String, fromPeer peerID: MCPeerID) {
    
  }
  
  // Start receiving a resource from remote peer
  func session(_ session: MCSession, didStartReceivingResourceWithName resourceName: String, fromPeer peerID: MCPeerID, with progress: Progress) {
    
  }
  
  // Finished receiving a resource from remote peer and saved the content in a temporary location - the app is responsible for moving the file to a permanent location within its sandbox
  func session(_ session: MCSession, didFinishReceivingResourceWithName resourceName: String, fromPeer peerID: MCPeerID, at localURL: URL, withError error: Error?) {
    
  }
  
  // Found peer
  func browser(_
    browser: MCNearbyServiceBrowser,
    foundPeer peerID: MCPeerID,
    withDiscoveryInfo info: [String : String]?) {
    
    foundPeers.append(peerID)
    
    delegate?.foundPeer()
    
    let p: NSDictionary = [
      "name": peerID.displayName,
      "info": info as Any
    ]
    
    eventEmitter.dispatch(event: eventEmitter.events.FoundPeer, data: p as AnyObject)
  }

  // Lost peer
  func browser(_ browser: MCNearbyServiceBrowser, lostPeer peerID: MCPeerID) {
    for (index, aPeer) in foundPeers.enumerated() {
      if aPeer == peerID {
        foundPeers.remove(at: index)
        break
      }
    }
    
    delegate?.lostPeer()
    
    let p: NSDictionary = ["name": peerID.displayName]
    
    eventEmitter.dispatch(event: eventEmitter.events.LostPeer, data: p as AnyObject)
  }
  
  // Failed to search for peers
  func browser(_ browser: MCNearbyServiceBrowser, didNotStartBrowsingForPeers error: Error) {
    print(error.localizedDescription)
  }
  
  // Incoming invitation request. Call the invitationHandler block
  // with YES and a valid session to connect the inviting peer to the session.
  func advertiser(_
    advertiser: MCNearbyServiceAdvertiser,
                  didReceiveInvitationFromPeer peerID: MCPeerID,
                  withContext context: Data?,
                  invitationHandler: @escaping ((Bool, MCSession?) -> Void)) {
    print("Invitation received")
    let associateSession = MCSession(peer: peerID, securityIdentity: nil, encryptionPreference: MCEncryptionPreference.none)
    invitationHandler(true, associateSession)
  }
  
  // Exposed module methods
  @objc func findPeers(_ callback: RCTResponseSenderBlock) -> Void {
    if !isBrowsing {
      browser.startBrowsingForPeers()
      isBrowsing = true
    }
    
    if !isAdvertising {
      advertiser.startAdvertisingPeer()
      isAdvertising = true
    }
    
    let response = JSResponse()
    response.response = ["success": true] as AnyObject?
    callback(response.toRes())
  }
  
  @objc func stopFinding(_ callback: RCTResponseSenderBlock) -> Void {
    if isBrowsing {
      browser.stopBrowsingForPeers()
      isBrowsing = false
    }
    
    if isAdvertising {
      advertiser.stopAdvertisingPeer()
      isAdvertising = false
    }
    
    let response = JSResponse()
    response.response = ["success": true] as AnyObject?
    callback(response.toRes())
  }
  
  @objc func connectToPeer(_ name: String) -> Void {
    NSLog("Connect to %@", name)
    
    let p: MCPeerID? = findPeerByName(name: name)
    
    if let peerToConnect = p {
      session.nearbyConnectionData(forPeer: peerToConnect) { data, error in
        guard error == nil else {
          print(error as Any)
          return
        }
      }
      browser.invitePeer(peerToConnect, to: session, withContext: nil, timeout: 30)
    } else {
      print("No peer found by \(name)")
    }
  }
  
  // Helpers
  func findPeerByName(name: String) -> MCPeerID? {
    var foundPeer: MCPeerID?
    
    for (_, aPeer) in foundPeers.enumerated() {
      if aPeer.displayName == name {
        foundPeer = aPeer
      }
    }
    
    return foundPeer
  }
  
}
