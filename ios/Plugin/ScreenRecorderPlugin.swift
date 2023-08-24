import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(ScreenRecorderPlugin)
public class ScreenRecorderPlugin: CAPPlugin {
    
    @objc func start(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "status":false,
            "message": "This method is not implemented for iOS"
        ])
    }

    @objc func stop(_ call: CAPPluginCall) {]
        call.resolve([
            "status":false,
            "message": "This method is not implemented for iOS"
        ])
    }

    @objc func recorder_status(_ call: CAPPluginCall) {
        call.resolve([
            "status":false,
            "message": "This method is not implemented for iOS"
        ])
    }
}
