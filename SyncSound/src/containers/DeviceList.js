import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {connectToPeer} from '../actions/connections';

import DeviceListComponent from '../components/DeviceList';

const DeviceList = ({
  devices,
  handleDevicePress,
}) => (
  <DeviceListComponent
    devices={devices}
    onDevicePress={handleDevicePress}
  />
);

DeviceList.propTypes = {
  handleDevicePress: PropTypes.func.isRequired,
  devices: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    isConnected: PropTypes.bool.isRequired,
    isPending: PropTypes.bool.isRequired,
  })).isRequired,
};

function mapStateToProps({connections}) {
  return {
    devices: connections.connectableDevices,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleDevicePress: connectToPeer,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);
