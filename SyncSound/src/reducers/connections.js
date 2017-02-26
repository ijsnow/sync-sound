import {REHYDRATE} from 'redux-persist/constants';

import {
  initialState,
  CONNECTION_FETCHING,
  CONNECTION_FETCHED,
} from '../middleware/connections';

const REDUCER_ACTION_HANDLERS = {
  [CONNECTION_FETCHING]: state => ({
    ...state,
    isFetching: true,
  }),
  [CONNECTION_FETCHED]: state => ({
    ...state,
    isFetching: false,
  }),
  [REHYDRATE]: () => initialState,
};

export default function navigationReducer(state = initialState, action) {
  const handler = REDUCER_ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
