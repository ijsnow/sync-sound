import DeviceSearchPage from './components/DeviceSearchPage';

export default function getRoutes(isLoggedIn) {
  return {
    DeviceSearchPage: {
      id: 'DeviceSearchPage',
      component: DeviceSearchPage,
      isInitial: true,
      isLoggedIn,
    },
  };
}
