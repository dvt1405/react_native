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
  StatusBar,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';
import LoginForm from '../components/LoginForm'
export default class LoginFrm extends Component {
  state = {
    username: '',
    password: '',
    checkPass: false,
    notice: ''
  }
  _onChangeUsername = (text) => {
    this.setState({
      username: text
    })
  }
  _onChangePassword = (text) => {
    this.setState({
      password: text
    })
  }
  _onLoginPress = () => {
    (this.state.username == 'dvt' && this.state.password == 'tuan') ?
      (this.props.navigation.navigate('Home_Screen'), this.setState({ notice: '', username:'', password:'' }))
      :( this.setState({ notice: 'Check your email or password!', password: '' }), Keyboard.dismiss())
  }
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('../img/background.png')}
      >
        <StatusBar hidden={true} />
        <LoginForm
          onChangeUsername={this._onChangeUsername}
          onChangePassword={this._onChangePassword}
          username={this.state.username}
          password={this.state.password}
          onLoginPress={this._onLoginPress}
          notice={this.state.notice}
        />
      </ImageBackground>
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
    // backgroundColor: '#676967',
  },
  notice: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#676967',
  },
});
