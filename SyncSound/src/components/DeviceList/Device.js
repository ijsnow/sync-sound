import React, {PropTypes} from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';

import colors from '../../styles/colors';
import styles from './styles';

const Device = ({name, isPending, isConnected, onPress}) => (
  <TouchableOpacity
    style={styles.deviceContainer}
    onPress={onPress}
  >
    <Text style={styles.deviceText}>{name}</Text>
    {isPending && (
      <ActivityIndicator
        animating
        color={colors.indigo}
        style={styles.activity}
      />
    )}
    {isConnected && (
      <Text style={styles.connected}>{'\u2713'}</Text>
    )}
    {!isConnected && !isPending && (
      <Text style={styles.connect}>{'connect'}</Text>
    )}
  </TouchableOpacity>
);

Device.propTypes = {
  name: PropTypes.string.isRequired,
  isConnected: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Device;
