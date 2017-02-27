import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchConnections} from '../actions/connections';

import Button from '../components/Button';

const ConnectButton = ({
  handlePress,
  isFetchingConnections,
}) => (
  <Button
    onPress={handlePress}
    isDisabled={isFetchingConnections}
  >
    {isFetchingConnections ? 'Searching...' : 'Find Devices'}
  </Button>
);

ConnectButton.propTypes = {
  handlePress: PropTypes.func.isRequired,
  isFetchingConnections: PropTypes.bool.isRequired,
};

function mapStateToProps({connections}) {
  return {
    isFetchingConnections: connections.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handlePress: fetchConnections,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectButton);
