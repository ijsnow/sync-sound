import actions, {
  CONNECTION_FIND_PEERS,
  CONNECTION_STOP_FINDING,
} from './actions';

import Listeners from './listeners';

export {
  CONNECTION_FIND_PEERS,
  CONNECTION_STOP_FINDING,
  CONNECTION_PEER_FOUND,
  CONNECTION_PEER_LOST,
  CONNECTION_PEER_CONNECTING,
  CONNECTION_PEER_CONNECTED,
  CONNECTION_CONNECT_TO_PEER,
} from './actions';

export const initialState = {
  isFetching: false,
  connectableDevices: [],
  connectedDevices: [],
  pendingDevices: {}, // map of device names
};

export const isConnectionAction = action => !!(actions[action]);

export default function createMiddleware() {
  const listeners = new Listeners();

  return function connectionMiddleware({dispatch, getState}) {
    return next => (action) => {
      const handler = actions[action.type];

      if (action.type === CONNECTION_FIND_PEERS) {
        listeners.start(dispatch);
      } else if (action.type === CONNECTION_STOP_FINDING) {
        listeners.stop();
      }

      if (handler) {
        const state = getState().connections || initialState;

        handler(dispatch, state, action, next);

        return null;
      }

      return next(action);
    };
  };
}
