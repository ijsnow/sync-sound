import {NativeAppEventEmitter} from 'react-native';

import {
  handleFoundPeer,
  handleLostPeer,
  handlePeerConnecting,
  handlePeerConnected,
  handleConnectionFailed,
} from './actions';

class Listeners {
  constructor() {
    this.foundPeerListener = null;
    this.lostPeerListener = null;
    this.peerConnectingListener = null;
  }

  start(dispatch) {
    this.foundPeerListener = NativeAppEventEmitter
      .addListener('FoundPeer', handleFoundPeer.bind(null, dispatch));
    this.lostPeerListener = NativeAppEventEmitter
      .addListener('LostPeer', handleLostPeer.bind(null, dispatch));
    this.peerConnectingListener = NativeAppEventEmitter
      .addListener('PeerConnecting', handlePeerConnecting.bind(null, dispatch));
    this.peerConnectedListener = NativeAppEventEmitter
      .addListener('PeerConnected', handlePeerConnected.bind(null, dispatch));
    this.peerConnectionFailedListener = NativeAppEventEmitter
      .addListener('PeerConnectionFailed', handleConnectionFailed.bind(null, dispatch));
  }

  stop() {
    if (this.foundPeerListener) {
      this.foundPeerListener.remove();
    }

    if (this.lostPeerListener) {
      this.lostPeerListener.remove();
    }

    if (this.peerConnectingListener) {
      this.peerConnectingListener.remove();
    }

    if (this.peerConnectedListener) {
      this.peerConnectedListener.remove();
    }

    if (this.peerConnectionFailedListener) {
      this.peerConnectionFailedListener.remove();
    }
  }
}

export default Listeners;
