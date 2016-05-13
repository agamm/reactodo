import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        return (
            <View style={{
                    flex: 1,
                    marginTop: 5,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderStyle: 'dotted',
                    padding: 5
                }}>
                 <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                  />
                <TodoItem text={"Todo item #1"}></TodoItem>
                <TodoItem text={"Todo item #2"}></TodoItem>
                <TodoItem text={"Todo item #3"}></TodoItem>
            </View>
        )
    }
}

module.exports = TodoList