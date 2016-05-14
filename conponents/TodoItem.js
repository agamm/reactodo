import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity , 
} from 'react-native';

class TodoItem extends Component {
    onClick() {
      this.props.toggleTodo(this.props.id)
    }

    render() {
        const todoItem = this.props;
        var style = todoItem.done ? todoItemStyle.done : todoItemStyle.undone;
        return (
          <TouchableOpacity onPress={this.onClick.bind(this)}>
            <Text style={style} > {todoItem.text} </Text>
          </TouchableOpacity >
        )
    }
}

var todoItemStyle = StyleSheet.create({
  undone: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  done: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'line-through'
  }
});

module.exports = TodoItem