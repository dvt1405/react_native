import React, { Component } from 'react';
import {
  Text,
  View,
  YellowBox
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import ComicListScreen from './ComicListScreen';
import ComicDetail from './ComicDetail';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
const Navigation = createStackNavigator({
  ComicList: {
    screen: ComicListScreen,
    navigationOptions: ({navigation}) => (
      {title: 'Comics'}
    )
  }, 
  ComicDetail: {
    screen: ComicDetail
  }
})

class App extends Component {
  state = {  }
  render() {
    return (
      <Navigation/>
    );
  }
}

export default App;