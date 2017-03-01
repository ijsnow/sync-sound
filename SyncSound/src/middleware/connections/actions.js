import {NativeModules, Alert} from 'react-native';

const {ConnectionManager} = NativeModules;

export const CONNECTION_FETCH = 'CONNECTION_FETCH';
export const CONNECTION_FETCHING = 'CONNECTION_FETCHING';
export const CONNECTION_FETCHED = 'CONNECTION_FETCHED';
export const CONNECTION_CONNECT_TO_DEVICE = 'CONNECTION_CONNECT_TO_DEVICE';
export const CONNECTION_CONNECTING = 'CONNECTION_CONNECTING';
export const CONNECTION_CONNECTED = 'CONNECTION_CONNECTED';
export const CONNECTION_ATTEMPT_FAILED = 'CONNECTION_ATTEMPT_FAILED';

function fetchedConnections(connections) {
  return {
    type: CONNECTION_FETCHED,
    payload: connections,
  };
}

function handleFetchDevicesRes(dispatch, error, devices) {
  if (error) {
    // Do some kind of error handling
    return;
  }

  const processedDevices = devices.map(name => ({name, isConnected: false}));

  dispatch(fetchedConnections(processedDevices));
}

function fetchConnections(dispatch) {
  dispatch({
    type: CONNECTION_FETCHING,
  });

  ConnectionManager
    .fetchConnectableDevices(handleFetchDevicesRes.bind(null, dispatch));
}

function handleConnectToDeviceRes(dispatch, error, {success, name}) {
  if (error || !success) {
    Alert.alert('Uh Oh!', error);

    dispatch({
      type: CONNECTION_ATTEMPT_FAILED,
      payload: name,
    });

    return;
  }

  if (success) {
    dispatch({
      type: CONNECTION_CONNECTED,
      payload: name,
    });
  }
}

function connectToDevice(dispatch, state, device) {
  dispatch({
    type: CONNECTION_CONNECTING,
    payload: device.name,
  });

  ConnectionManager
    .connectToDevice(device.name, handleConnectToDeviceRes.bind(null, dispatch));
}

export default {
  [CONNECTION_FETCH]: fetchConnections,
  [CONNECTION_CONNECT_TO_DEVICE]: connectToDevice,
};
