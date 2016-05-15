import React, { Component } from 'react';
import TodoList from '../conponents/TodoList'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class Main extends Component {
  render() {
        return (
            <View style={styles.container}>
                  <TodoList />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

export default Main// connect(({routes}) => ({routes}))(Main); -- why do i need this extra line?