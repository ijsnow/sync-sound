import React, {Component, PropTypes} from 'react';
import {View, StatusBar, Navigator} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {values} from 'lodash/fp';
import {didNavigateTo, navigateTo, setIsNavigating} from '../actions/navigation';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialRoute: values(props.routes).find(route => route.isInitial),
      isNavigating: false,
    };

    this.renderScene = this.renderScene.bind(this);
    this.onWillFocus = this.onWillFocus.bind(this);
  }

  componentWillReceiveProps({navigateToRoute}) {
    if (navigateToRoute && !this.state.isNavigating) {
      this.props.setIsNavigating(true);

      const method = navigateToRoute.method || 'push';

      this.navigator[method](this.routes[navigateToRoute.id]);
    }
  }

  renderScene(route, navigator) {
    const RouteComponent = route.component;

    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle={route.statusBarStyle || 'light-content'} />
        <RouteComponent
          go={{
            to: this.props.navigateTo,
            back: navigator.pop,
          }}
          navigator={navigator}
          route={{...route, ...this.routes[route.id]}}
          name={route.id}
        />
      </View>
    );
  }

  onWillFocus(route) {
    this.props.didNavigateTo(route);
    this.setState({isNavigating: false});
  }

  get routes() {
    return this.props.routes;
  }

  render() {
    return (
      <Navigator
        ref={(r) => { this.navigator = r; }}
        initialRoute={this.state.initialRoute}
        renderScene={this.renderScene}
        onWillFocus={this.onWillFocus}
      />
    );
  }
}

function mapStateToProps({navigation}) {
  return {...navigation};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    didNavigateTo,
    navigateTo,
    setIsNavigating,
  }, dispatch);
}

Navigation.propTypes = {
  routes: PropTypes.shape({}).isRequired,
  navigateTo: PropTypes.func.isRequired,
  setIsNavigating: PropTypes.func.isRequired,
  didNavigateTo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
