import actions from './actions';

export {
  CONNECTION_FETCH,
  CONNECTION_FETCHING,
  CONNECTION_FETCHED,
} from './actions';

export const initialState = {
  isFetching: false,
  connections: [],
};

export const isConnectionAction = action => !!(actions[action]);

export default function connectionMiddleware({dispatch, getState}) {
  return next => (action) => {
    const handler = actions[action.type];

    if (handler) {
      const state = getState().connections || initialState;

      handler(dispatch, state);

      return null;
    }

    return next(action);
  };
}
