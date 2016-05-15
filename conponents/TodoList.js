import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text, 
  TextInput,
  TouchableOpacity,
  ScrollView, 
} from 'react-native';

import TodoItem from './TodoItem'
import { connect } from 'react-redux';
import {addTodo, toggleTodo} from '../actions/actions'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    onSubmitTodo(e) {
        if(this.state.text.length > 0)
            this.props.addTodo(this.state.text)
    }

    render() {
        console.log(this.props);
        const todos = this.props.todos; 
        const toggleTodo = this.props.toggleTodo;
        return (
            <View style={todoListStyles.container}>
                <TextInput
                    style={todoListStyles.textInput}
                    onChangeText={(text) => this.setState({text})}
                />
                <TouchableOpacity
                    style={todoListStyles.button}
                    onPress={this.onSubmitTodo.bind(this)}>
                    <Text>Add</Text>
                </TouchableOpacity>
                <ScrollView style={todoListStyles.scrollView}>
                    {todos.map(todo => (
                        <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} toggleTodo={toggleTodo}></TodoItem>
                    ))}
                </ScrollView>
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
    padding: 5,
    paddingTop: 40
  },
  textInput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  },
  button: {
    backgroundColor: 'blue',
    marginBottom: 7,
    borderRadius: 2
  },
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  },
});

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

module.exports = ConnectedTodoList