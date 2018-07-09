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
  Image,
  ImageBackground
} from 'react-native';
import Schedule from './Schedule'
export default class App extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('./img/background.png')}
      >
        <View
          style={styles.headerView}
        >
          <Text style={styles.headerText}>Schedule WorldCup 2018</Text>
          <Image
            source={require('./img/logo.png')}
            style={styles.headerLogo}
          />
        </View>
        <Schedule 
          textProps= 'Quali-Final'
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7
  },
  headerView: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 25,
    color: '#CBCECC',
    marginBottom:20,

  },
  headerLogo: {
    width: 80,
    height: 150,
    opacity: 0,
    marginBottom: 40
  },
  matchView: {
    flex: 1,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2E5E3',
    borderRadius: 10,
    marginBottom: 10
  },
  matchDateView: {
    flex: 0.3,
    marginBottom: 5
    
  },
  match: {
    flex:1,
    flexDirection: 'row'
  },
  matchIconFlag: {
    flex: 1,
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 10
  },
  matchIcon1: {
    flex: 1,
    paddingLeft: 9,
  },
  matchIcon2: {
    flex: 1,
    paddingRight: 9
  }
});
