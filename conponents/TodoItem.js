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
       
       return <Text style={todoItemStyle.text}> {this.props.text} </Text>
    }
}

var todoItemStyle = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

module.exports = TodoItem