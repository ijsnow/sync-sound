package com.syncsound;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;

/**
 * Created by IsaacSnow on 2/28/17.
 */

public class Response {
    private Callback callback;
    public String error;
    public WritableMap map;
    public WritableArray list;

    public Response(Callback cb) {
        this.callback = cb;
    }

    public void send() {
        if (map != null) {
            callback.invoke(error, map);
        } else if (list != null) {
            callback.invoke(error, list);
        }
    }
}
