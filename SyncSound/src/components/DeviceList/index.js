import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';

import styles from './styles';

import Device from './Device';

class DeviceList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ds: new ListView
        .DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        .cloneWithRows(props.devices),
    };

    this.renderDevice = this.renderDevice.bind(this);
  }

  componentWillReceiveProps({devices}) {
    this.setState({
      ds: this.state.ds.cloneWithRows(devices),
    });
  }

  renderDevice(device) {
    return (
      <Device
        {...device}
        onPress={() => this.props.onDevicePress(device)}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{'Devices'}</Text>
        <ListView
          dataSource={this.state.ds}
          renderRow={this.renderDevice}
          style={styles.container}
          enableEmptySections={true}
        />
      </View>
    );
  }
}

DeviceList.propTypes = {
  onDevicePress: PropTypes.func.isRequired,
  devices: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default DeviceList;
