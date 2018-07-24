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
  ActivityIndicator,
  Alert,
  Keyboard
} from 'react-native';

import SearchBox from './SearchBox'
import BigItem from './BigItem'
import axios from 'axios'
import List from './List'
export default class App extends Component {
  state = {
    data: [],
    location: '',
    wasLoaded: false,
    temp: 1,
    update_city: 'london',
  }
  componentWillMount() {
    this._refresh()
  }
  _refresh = () => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.update_city}&appid=927d09bc49dbee6aac7f5cb1df707542`)
      .then((res) => {
        this.setState({
          location: res.data.city.name,
          data: res.data.list
        }, () => {
          this.state.data.length == 7
            ? this.setState({ wasLoaded: true })
            : this.setState({ wasLoaded: false })
        })
      })
  }
  _onCPress = () => {
    this.setState({ temp: 1 })
  }
  _onFPress = () => {
    this.setState({ temp: 2 })
  }
  _onChange = (value) => {
    this.setState({ update_city: value })
  }
  onSearchPress = () => {
    this._refresh()
    Keyboard.dismiss()
  }
  render() {
    return (
      this.state.wasLoaded == true
        ? <View style={styles.container}>
          <SearchBox
            location={this.state.location}
            date={this.state.data[0].dt}
            onChange={this._onChange}
            onPress={this.onSearchPress}
          />
          <BigItem
            onPress1={this._onCPress}
            onPress2={this._onFPress}
            data={this.state.data[0]}
            temp={this.state.temp}
          />
          <List
            data={this.state.data.slice(1, 7)}
            temp={this.state.temp}
          />
        </View> : (<ActivityIndicator />)
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#39354C',
    paddingTop: 30,
  }
});
