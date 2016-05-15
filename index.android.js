import React, { Component } from 'react';

import {
  AppRegistry,
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import { createStore, applyMiddleware, compose } from 'redux';
import { connect, Provider } from 'react-redux';
import reducer from './reducers/reducer';
import Test from './scenes/Test'
import Main from './scenes/Main'

const store = createStore(reducer);


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router>
            <Scene key="root">
              <Scene key="main" component={Main} title="Main"  />
              <Scene key="test" component={Test} title="Test" initial={true} />
            </Scene>
          </Router>
        </Provider>
    );
  }
}



AppRegistry.registerComponent('reactodo', () => App);
