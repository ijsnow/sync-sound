package com.syncsound;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;

/**
 * Created by gradyfitzgerald on 2/28/17.
 */

public class ConnectionManager extends ReactContextBaseJavaModule{

    public ConnectionManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ConnectionManager";
    }

    @ReactMethod
    public void fetchConnectableDevices(Callback callback) {
        Response res = new Response(callback);

        res.list = new WritableNativeArray();

        String[] devices = new String[]{"Grady's phone", "Isaac's phone"};

        for (String device : devices) {
            res.list.pushString(device);
        }

        /**
         * This sends to JS as a JS array like
         *  [
         *    "Grady's phone",
         *    "Isaac's phone",
         *  ]
         */
        res.send();
    }

    @ReactMethod
    public void connectToDevice(String name, Callback callback) {
        Response res = new Response(callback);

        res.error = "This is an error";

        res.map = new WritableNativeMap();
        res.map.putBoolean("success", false);
        res.map.putString("name", name);

        /**
         * This sends to JS as a JSON object like
         *  {
         *    success: false,
         *    name: "Whatever name is",
         *  }
         */
        res.send();
    }

}
