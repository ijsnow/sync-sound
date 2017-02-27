import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colors.light,
    paddingTop: 20,
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 3,
  },
  button: {
    flex: 1,
  },
});

export default styles;
