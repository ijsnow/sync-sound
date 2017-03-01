import {REHYDRATE} from 'redux-persist/constants';

// Import action handlers
import {

} from '../actions/device';

const initialState = {

};

// Action Handlers
const REDUCER_ACTION_HANDLERS = {
  [REHYDRATE]: () => initialState,
};

// Reducer
export default function deviceReducer(state = initialState, action) {
  const handler = REDUCER_ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
