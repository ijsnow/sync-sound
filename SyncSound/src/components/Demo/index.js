import React, {PropTypes} from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './styles';

const App = ({appName}) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      {`Welcome to ${appName}`}
    </Text>
    <Text style={styles.instructions}>
      Press Cmd+R to reload,{'\n'}
      Cmd+D or shake for dev menu
    </Text>
  </View>
);

App.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default App;
