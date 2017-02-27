import React, {PropTypes} from 'react';
import {
  View,
} from 'react-native';

import ConnectButton from '../../containers/ConnectButton';
import DeviceList from '../../containers/DeviceList';

import styles from './styles';

const App = () => (
  <View style={styles.container}>
    <View style={[styles.section, styles.list]}>
      <DeviceList />
    </View>
    <View style={[styles.section, styles.button]}>
      <ConnectButton />
    </View>
  </View>
);

App.propTypes = {
  /**/
};

export default App;
