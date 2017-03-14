/* eslint import/prefer-default-export: 0 */
import {
  CONNECTION_FETCH,
  CONNECTION_CONNECT_TO_PEER,

  CONNECTION_FIND_PEERS,
  CONNECTION_STOP_FINDING,
} from '../middleware/connections';

export function findPeers() {
  return {
    type: CONNECTION_FIND_PEERS,
  };
}

export function stopFinding() {
  return {
    type: CONNECTION_STOP_FINDING,
  };
}

export function fetchConnections() {
  return {
    type: CONNECTION_FETCH,
  };
}

export function connectToPeer(device) {
  return {
    type: CONNECTION_CONNECT_TO_PEER,
    payload: device,
  };
}
