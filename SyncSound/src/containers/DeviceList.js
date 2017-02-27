import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {connectToDevice} from '../actions/connections';

import DeviceList from '../components/DeviceList';

const ConnectableDeviceList = ({
  devices,
  handleDevicePress,
}) => (
  <DeviceList
    devices={devices}
    onDevicePress={handleDevicePress}
  />
);

ConnectableDeviceList.propTypes = {
  handleDevicePress: PropTypes.func.isRequired,
  devices: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequires,
  })).isRequired,
};

function mapStateToProps({connections}) {
  return {
    devices: connections.connectableDevices,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleDevicePress: connectToDevice,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectableDeviceList);
