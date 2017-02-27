import {REHYDRATE} from 'redux-persist/constants';

import {
  initialState,
  CONNECTION_FETCHING,
  CONNECTION_FETCHED,
  CONNECTION_CONNECTING,
  CONNECTION_CONNECTED,
} from '../middleware/connections';

const REDUCER_ACTION_HANDLERS = {
  [CONNECTION_FETCHING]: state => ({
    ...state,
    isFetching: true,
  }),
  [CONNECTION_FETCHED]: (state, {payload}) => ({
    ...state,
    isFetching: false,
    connectableDevices: payload,
  }),
  [CONNECTION_CONNECTING]: (state, {payload}) => ({
    ...state,
    pendingDevices: {
      ...state.pendingDevices,
      [payload]: true,
    },
  }),
  [CONNECTION_CONNECTED]: (state, {payload}) => ({
    ...state,
    pendingDevices: {
      ...state.pendingDevices,
      [payload]: false,
    },
  }),
  [REHYDRATE]: () => initialState,
};

export default function navigationReducer(state = initialState, action) {
  const handler = REDUCER_ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
