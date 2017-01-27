import Demo from './containers/Demo';

export default function getRoutes(isLoggedIn) {
  return {
    Landing: {
      id: 'Landing',
      component: Demo,
      isInitial: true,
      isLoggedIn,
    },
  };
}
