import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// import {findPeers, stopFinding} from '../actions/connections';
import {findPeers, stopFinding} from '../middleware/webrtc/actions';

import Button from '../components/Button';

const ConnectButton = ({
  handleFindPeers,
  handleStopFinding,
  isFetchingConnections,
}) => (
  <Button
    onPress={isFetchingConnections ? handleStopFinding : handleFindPeers}
    isShowingActivityIndicator={isFetchingConnections}
  >
    {isFetchingConnections ? 'Stop Searching' : 'Find Devices'}
  </Button>
);

ConnectButton.propTypes = {
  handleFindPeers: PropTypes.func.isRequired,
  handleStopFinding: PropTypes.func.isRequired,
  isFetchingConnections: PropTypes.bool.isRequired,
};

function mapStateToProps({connections}) {
  return {
    isFetchingConnections: connections.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleFindPeers: findPeers,
    handleStopFinding: stopFinding,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectButton);
