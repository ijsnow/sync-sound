import React, {PropTypes} from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

const Button = ({
  onPress,
  isDisabled,
  isShowingActivityIndicator,
  children,
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={isDisabled}
    style={[styles.container, isDisabled && styles.disabled]}
  >
    {isShowingActivityIndicator && (
      <ActivityIndicator
        animating
        color={'white'}
        style={styles.activity}
      />
    )}
    <Text style={[styles.text, isDisabled && styles.textDisabled]}>
      {children}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isShowingActivityIndicator: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  isDisabled: false,
  isShowingActivityIndicator: false,
};

export default Button;
