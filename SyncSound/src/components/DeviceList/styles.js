import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  label: {
    color: colors.gray,
    fontSize: 16,
    padding: 10,
  },
  deviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'stretch',
    padding: 15,
    shadowColor: '#000',
    shadowRadius: 1,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  deviceText: {
    color: colors.darkGray,
  },
  activity: {

  },
  connected: {
    color: colors.green,
  },
  connect: {
    color: colors.indigo,
    fontSize: 12,
  },
});

export default styles;
