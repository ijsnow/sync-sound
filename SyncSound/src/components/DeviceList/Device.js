import React, {PropTypes} from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import colors from '../../styles/colors';
import styles from './styles';

const Device = ({name, onPress}) => (
  <TouchableOpacity
    style={styles.deviceContainer}
    onPress={onPress}
  >
    <Text style={styles.deviceText}>{name}</Text>
  </TouchableOpacity>
);

Device.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Device;
