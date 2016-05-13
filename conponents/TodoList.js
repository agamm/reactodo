import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text, 
  TextInput,
  TouchableHighlight, 
} from 'react-native';

import TodoItem from './TodoItem'

class TodoList extends Component {
    onSubmitTodo(e) {
        console.log(this.props)
        console.log(this.props.addTodo)
        this.props.addTodo(this.state.text)
    }

    render() {
        const todos = this.props.todos;
        return (
            <View style={todoListStyles.container}>
                <TextInput
                    style={todoListStyles.textInput}
                    onChangeText={(text) => this.setState({text})}
                />
                <TouchableHighlight
                    style={todoListStyles.button}
                    onPress={this.onSubmitTodo.bind(this)}>
                    <Text>Add</Text>
                </TouchableHighlight>
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
  },
  button: {
    marginBottom: 7,
    borderRadius: 2
  }
});

module.exports = TodoList