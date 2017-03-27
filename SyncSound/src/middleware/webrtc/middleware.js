import {
  RTCPeerConnection,
} from 'react-native-webrtc';

import {
  handlers,
} from './actions';

const conf = {
  iceServers: [
    {
      url: 'stun:stun.l.google.com:19302',
    }
  ]
};

export default function createMiddleware() {
  return function connectionMiddleware({dispatch, getState}) {
    const pc = new RTCPeerConnection(conf);

    return next => (action) => {


      return next(action);
    };
  };
}
