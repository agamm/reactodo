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
        const todos = this.props.todos;
        console.log(todos);
        return (
            <View style={todoListStyles.container}>
                 <TextInput
                    style={todoListStyles.textInput}
                    onChangeText={(text) => this.setState({text})}
                  />
                {todos.map(todo => (
                    <TodoItem key={todo.id} text={todo.text} done={todo.done}></TodoItem>
                ))}
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