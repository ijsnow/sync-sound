import {
  NativeModules,
  AlertIOS,
} from 'react-native';

const {ConnectionManager} = NativeModules;

export const CONNECTION_FETCH = 'CONNECTION_FETCH';
export const CONNECTION_FETCHING = 'CONNECTION_FETCHING';
export const CONNECTION_FETCHED = 'CONNECTION_FETCHED';
export const CONNECTION_CONNECT_TO_DEVICE = 'CONNECTION_CONNECT_TO_DEVICE';
export const CONNECTION_CONNECTING = 'CONNECTION_CONNECTING';
export const CONNECTION_CONNECTED = 'CONNECTION_CONNECTED';

export const CONNECTION_FIND_PEERS = 'CONNECTION_FIND_PEERS';
export const CONNECTION_STOP_FINDING = 'CONNECTION_STOP_FINDING';
export const CONNECTION_PEER_FOUND = 'CONNECTION_PEER_FOUND';
export const CONNECTION_PEER_LOST = 'CONNECTION_PEER_LOST';
export const CONNECTION_CONNECT_TO_PEER = 'CONNECTION_CONNECT_TO_PEER';
export const CONNECTION_PEER_CONNECTING = 'CONNECTION_PEER_CONNECTING';
export const CONNECTION_PEER_CONNECTED = 'CONNECTION_PEER_CONNECTED';
export const CONNECTION_ATTEMPT_FAILED = 'CONNECTION_ATTEMPT_FAILED';

export function handleFoundPeer(dispatch, {name, info}) {
  dispatch({
    type: CONNECTION_PEER_FOUND,
    payload: {
      name,
      info,
      isPending: false,
      isConnected: false,
    },
  });
}

export function handleLostPeer(dispatch, {name}) {
  dispatch({
    type: CONNECTION_PEER_LOST,
    payload: {name},
  });
}

export function handlePeerConnecting(dispatch, {name}) {
  dispatch({
    type: CONNECTION_PEER_CONNECTING,
    payload: {name},
  });
}

export function handlePeerConnected(dispatch, {name}) {
  AlertIOS.prompt(
    'Enter message',
    null,
    text => ConnectionManager.sendMessageToPeer(text),
  );

  dispatch({
    type: CONNECTION_PEER_CONNECTED,
    payload: {name},
  });
}

export function handleConnectionFailed(dispatch, {name}) {
  dispatch({
    type: CONNECTION_ATTEMPT_FAILED,
    payload: {name},
  });
}

function findPeers(dispatch, state, action, next) {
  ConnectionManager
    .findPeers((error, {success}) => {
      if (success) {
        next(action);
      }
    });
}

function stopFinding(dispatch, state, action, next) {
  ConnectionManager
    .stopFinding((error, {success}) => {
      if (success) {
        next(action);
      }
    });
}

function connectToPeer(dispatch, state, {payload}) {
  ConnectionManager.connectToPeer(payload.name);
}

export default {
  [CONNECTION_FIND_PEERS]: findPeers,
  [CONNECTION_STOP_FINDING]: stopFinding,
  [CONNECTION_CONNECT_TO_PEER]: connectToPeer,
};
