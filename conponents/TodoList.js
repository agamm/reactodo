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
            <View style={todoListStyles.container}>
                 <TextInput
                    style={todoListStyles.textInput}
                    onChangeText={(text) => this.setState({text})}
                  />
                <TodoItem text={"Todo item #1"} done={true}></TodoItem>
                <TodoItem text={"Todo item #2"}></TodoItem>
                <TodoItem text={"Todo item #3"}></TodoItem>
            </View>
        )
    }
}

var todoListStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dotted',
    padding: 5
  },
  textInput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  }
});

module.exports = TodoList