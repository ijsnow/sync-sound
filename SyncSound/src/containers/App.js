import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import getRoutes from '../routes';
import Navigation from './Navigation';

const AppContainer = () => (
  <Navigation routes={getRoutes()} />
);

AppContainer.propTypes = {
  appName: PropTypes.string.isRequired,
};

function mapStateToProps({appName}) {
  return {
    appName,
  };
}

export default connect(mapStateToProps)(AppContainer);
