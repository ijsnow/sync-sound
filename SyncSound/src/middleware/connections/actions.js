// import {NativeModules} from 'react-native';
//
// const {ConnectionManager} = NativeModules;

export const CONNECTION_FETCH = 'CONNECTION_FETCH';
export const CONNECTION_FETCHING = 'CONNECTION_FETCHING';
export const CONNECTION_FETCHED = 'CONNECTION_FETCHED';

function fetchedConnections(connections) {
  return {
    type: CONNECTION_FETCHED,
    payload: connections,
  };
}

function fetchConnections(dispatch) {
  dispatch({
    type: CONNECTION_FETCHING,
  });

  // Will replace this with the actual function call to fetch connections
  setTimeout(() => dispatch(fetchedConnections(['a connection'])), 2000);
}

export default {
  [CONNECTION_FETCH]: fetchConnections,
};
