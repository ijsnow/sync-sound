package com.syncsound;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;

/**
 * Created by gradyfitzgerald on 2/28/17.
 */

public class ConnectionManager extends ReactContextBaseJavaModule{

    public ConnectionManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    public void fetchConnectableDevices(Callback callback) {
        callback.invoke(null, "Grady's phone");
    }

    public String getName() {
        return "ConnectionManager";
    }

    public void connectToDevice(String s, Callback callback) {

    }

}
