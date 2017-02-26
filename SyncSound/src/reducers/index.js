import {combineReducers} from 'redux';

import navigation from './navigation';
import connections from './connections';

const rootReducer = combineReducers({
  appName: () => 'Sync Sound',
  navigation,
  connections,
});

export default rootReducer;
