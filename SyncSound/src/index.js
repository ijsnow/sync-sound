import React from 'react';
import {Provider} from 'react-redux';

import getStore from './store';
import App from './containers/App';

const SyncSound = () => (
  <Provider store={getStore()}>
    <App />
  </Provider>
);

export default SyncSound;
