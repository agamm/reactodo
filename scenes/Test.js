import React, { PropTypes, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Test extends React.Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  render () {
    console.log(this.props)
    return (
      <View style={{margin: 100}}>
      <Text onPress={Actions.main}>Go to the todos (Main activity)!</Text>
      </View>
    );
  }
}

export default Test