import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-lottie-splash-screen';
export class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
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
