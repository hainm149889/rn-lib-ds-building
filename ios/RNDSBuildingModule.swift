//
//  RNDSBuildingModule.swift
//  RNDSBuildingModule
//
//  Copyright © 2022 HaiNM. All rights reserved.
//

import Foundation

@objc(RNDSBuildingModule)
class RNDSBuildingModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
