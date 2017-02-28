//
//  JSResponse.swift
//  SyncSound
//
//  Created by Isaac Snow on 2/27/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

import Foundation

class JSResponse {
  var error: String? = nil
  var response: AnyObject? = nil
  
  func toRes() -> [AnyObject] {
    var res: [AnyObject] = [error as AnyObject]
    
    if response != nil {
      res.append(response!)
    }
    
    print(res)
    
    return res as [AnyObject]
  }
}
