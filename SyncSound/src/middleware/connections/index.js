import actions from './actions';

export {
  CONNECTION_FETCH,
  CONNECTION_FETCHING,
  CONNECTION_FETCHED,
  CONNECTION_CONNECT_TO_DEVICE,
} from './actions';

export const initialState = {
  isFetching: false,
  connectableDevices: [],
  connectedDevices: [],
  pendingDevices: {}, // map of device names
};

export const isConnectionAction = action => !!(actions[action]);

export default function connectionMiddleware({dispatch, getState}) {
  return next => (action) => {
    const handler = actions[action.type];

    if (handler) {
      const state = getState().connections || initialState;

      handler(dispatch, state, action.payload);

      return null;
    }

    return next(action);
  };
}
