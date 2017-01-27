import {createStore, applyMiddleware} from 'redux';
import {compose} from 'lodash/fp';
import {AsyncStorage} from 'react-native';
import createLogger from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist';
import rootReducer from './reducers';

// Uncomment to clear the AsyncStorage store of the redux store
// AsyncStorage.clear();

const middleware = applyMiddleware(
  createLogger(),
);

export default function getStore(data = {}) {
  const store = createStore(
    rootReducer,
    data,
    compose(middleware, autoRehydrate()),
  );
  persistStore(store, {storage: AsyncStorage});

  return store;
}
