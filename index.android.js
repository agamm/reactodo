import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TodoList from './conponents/TodoList'

const dummyTodos = [
  { id: 0, done: true,  text: 'make components' },
  { id: 1, done: false, text: 'design actions' },
  { id: 2, done: false, text: 'implement reducer' },
  { id: 3, done: false, text: 'connect components' }
];

class reactodo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoList todos={dummyTodos}></TodoList>
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
