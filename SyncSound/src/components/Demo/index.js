import React, {PropTypes} from 'react';
import {
  View,
} from 'react-native';

import ConnectButton from '../../containers/ConnectButton';

import styles from './styles';

const App = () => (
  <View style={styles.container}>
    <ConnectButton />
  </View>
);

App.propTypes = {
  //**//
};

export default App;
