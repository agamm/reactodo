import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
} from 'react-native';

class TodoItem extends Component {
    render() {
        const todoItem = this.props;
        var style = todoItem.done ? todoItemStyle.done : todoItemStyle.undone;
        return <Text style={style}> {todoItem.text} </Text>
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