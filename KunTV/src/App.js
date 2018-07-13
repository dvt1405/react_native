/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])
import LoginFrm from './Screens/Home'
import {HomeStack} from './StackNavigator'
import Home from './Screens/Home'
export default class App extends Component {
  render() {
    return (
      <HomeStack />
    );
  }
}
const window = Dimensions.get('window')
const windowWidth = Math.min(window.width, window.height)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#676967'
  },
  logo: {
    width: windowWidth,
    height: 150,
    opacity: 0.5
  },
  backgroundImgView: {

    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImg: {
    width: windowWidth,
    height: window.height,
    opacity: 0.5
  },
  buttons: {
    width: 55,
    height: 20,
    borderRadius: 2
  }
});
