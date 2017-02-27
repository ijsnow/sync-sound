/* eslint import/prefer-default-export: 0 */
import {
  CONNECTION_FETCH,
  CONNECTION_CONNECT_TO_DEVICE,
} from '../middleware/connections';

export function fetchConnections() {
  return {
    type: CONNECTION_FETCH,
  };
}

export function connectToDevice(device) {
  return {
    type: CONNECTION_CONNECT_TO_DEVICE,
    payload: device,
  };
}
