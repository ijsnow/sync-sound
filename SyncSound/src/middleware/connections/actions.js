import {NativeModules} from 'react-native';

const {ConnectionManager} = NativeModules;

export const CONNECTION_FETCH = 'CONNECTION_FETCH';
export const CONNECTION_FETCHING = 'CONNECTION_FETCHING';
export const CONNECTION_FETCHED = 'CONNECTION_FETCHED';
export const CONNECTION_CONNECT_TO_DEVICE = 'CONNECTION_CONNECT_TO_DEVICE';
export const CONNECTION_CONNECTING = 'CONNECTION_CONNECTING';

function fetchedConnections(connections) {
  return {
    type: CONNECTION_FETCHED,
    payload: connections,
  };
}

function fetchConnections(dispatch) {
  dispatch({
    type: CONNECTION_FETCHING,
  });

  // Will replace this with the actual function call to fetch connections
  setTimeout(() => dispatch(fetchedConnections([{
    name: 'Grady\'s phone',
    isConnected: false,
  }])), 2000);

  ConnectionManager.fetchConnectableDevices();
}

function connectToDevice(dispatch, state, device) {
  dispatch({
    type: CONNECTION_CONNECTING,
    payload: device.name,
  });

  // ConnectionManager.connectToDevice(device);
}

export default {
  [CONNECTION_FETCH]: fetchConnections,
  [CONNECTION_CONNECT_TO_DEVICE]: connectToDevice,
};
