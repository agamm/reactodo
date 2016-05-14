import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TodoList from './conponents/TodoList'
import { List, Map } from 'immutable';
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import { connect, Provider } from 'react-redux';
import {addTodo, toggleTodo} from './actions/actions'
const store = createStore(reducer);

const ConnectedTodoList = connect(
  function mapStateToProps(state) {
    return { 
      todos: state 
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id))
    }
  }
)(TodoList);

class reactodo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <ConnectedTodoList />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactodo', () => reactodo);
