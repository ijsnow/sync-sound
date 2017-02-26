/* eslint import/prefer-default-export: 0 */
import {
  CONNECTION_FETCH,
} from '../middleware/connections';

export function fetchConnections() {
  console.log(CONNECTION_FETCH);
  return {
    type: CONNECTION_FETCH,
  };
}
