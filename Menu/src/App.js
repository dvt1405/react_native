/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList
} from 'react-native';

import { menu } from './database.json'
import ItemMenu from './ItemMenu'
export default class App extends Component {
  _renderItem = ({ item }) => <ItemMenu
    uri={item.image}
    name={item.title}
    rate={item.rate}
  />


  _renderSectionHeader = ({ section: { category } }) => (
    <View style = {{alignItems: 'center'}}>
      <Text style={styles.header}>*{category}*</Text>
    </View>
  )
  _keyExtractor = (item, index) => item + index
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={menu}
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSectionHeader}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#96B8C4',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
  }
});
