import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
export class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default App;
