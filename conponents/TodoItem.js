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
       var style = this.props.done ? todoItemStyle.done : todoItemStyle.undone;
       return <Text style={style}> {this.props.text} </Text>
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