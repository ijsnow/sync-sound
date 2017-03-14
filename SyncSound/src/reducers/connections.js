import {uniqBy} from 'lodash/fp';

import {REHYDRATE} from 'redux-persist/constants';

import {
  initialState,

  CONNECTION_FIND_PEERS,
  CONNECTION_PEER_FOUND,
  CONNECTION_PEER_LOST,
  CONNECTION_STOP_FINDING,
  CONNECTION_PEER_CONNECTING,
  CONNECTION_PEER_CONNECTED,
} from '../middleware/connections';

const uniqByName = uniqBy('name');

const REDUCER_ACTION_HANDLERS = {
  [CONNECTION_FIND_PEERS]: state => ({
    ...state,
    isFetching: true,
  }),
  [CONNECTION_STOP_FINDING]: state => ({
    ...state,
    isFetching: false,
  }),
  [CONNECTION_PEER_FOUND]: (state, {payload}) => ({
    ...state,
    connectableDevices: uniqByName([].concat(state.connectableDevices, [payload])),
  }),
  [CONNECTION_PEER_LOST]: (state, {payload}) => ({
    ...state,
    connectableDevices: state.connectableDevices
      .filter(d => d.name !== payload.name),
  }),
  [CONNECTION_PEER_CONNECTING]: (state, {payload}) => ({
    ...state,
    connectableDevices: state.connectableDevices
      .map(d => (d.name === payload.name ? {...d, isPending: true} : d)),
  }),
  [CONNECTION_PEER_CONNECTED]: (state, {payload}) => ({
    ...state,
    connectableDevices: state.connectableDevices
      .map(d => (d.name === payload.name ? {...d, isPending: false, isConnected: true} : d)),
  }),
  [REHYDRATE]: () => initialState,
};

export default function navigationReducer(state = initialState, action) {
  const handler = REDUCER_ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
