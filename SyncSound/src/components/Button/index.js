import React, {PropTypes} from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

const Button = ({
  onPress,
  isDisabled,
  children,
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={isDisabled}
    style={[styles.container, isDisabled && styles.disabled]}
  >
    <Text style={[styles.text, isDisabled && styles.textDisabled]}>
      {children}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  isDisabled: false,
};

export default Button;
