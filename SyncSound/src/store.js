import {createStore, applyMiddleware} from 'redux';
import {compose} from 'lodash/fp';
import {AsyncStorage} from 'react-native';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';

import connectionMiddleware from './middleware/connections';

import rootReducer from './reducers';

// Uncomment to clear the AsyncStorage store of the redux store
// AsyncStorage.clear();

const middleware = applyMiddleware(
  ReduxThunk,
  connectionMiddleware,
  createLogger(),
);

export default function getStore(data = {}) {
  const store = createStore(
    rootReducer,
    data,
    compose(middleware, autoRehydrate()),
  );
  persistStore(store, {
    storage: AsyncStorage,
    blacklist: [
      'connections',
      'navigation',
    ],
  });

  return store;
}
