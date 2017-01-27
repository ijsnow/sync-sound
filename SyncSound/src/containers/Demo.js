import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Demo from '../components/Demo';

const DemoContainer = ({appName}) => (
  <Demo
    appName={appName}
  />
);

DemoContainer.propTypes = {
  appName: PropTypes.string.isRequired,
};

function mapStateToProps({appName}) {
  return {
    appName,
  };
}

export default connect(mapStateToProps)(DemoContainer);
