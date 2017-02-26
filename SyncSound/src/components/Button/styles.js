import {StyleSheet} from 'react-native';
import color from 'color';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: color(colors.gainsboro).darken(0.15).string(),
    shadowColor: '#000',
    shadowRadius: 1,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  disabled: {
    backgroundColor: colors.gainsboro,
  },
  text: {
    color: colors.white,
  },
  textDisabled: {
    color: colors.gray,
  },
});

export default styles;
