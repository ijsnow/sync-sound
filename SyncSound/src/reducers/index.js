import {combineReducers} from 'redux';

import navigation from './navigation';

const rootReducer = combineReducers({
  appName: () => 'Sync Sound',
  navigation,
});

export default rootReducer;
