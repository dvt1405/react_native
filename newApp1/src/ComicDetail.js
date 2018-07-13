import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList
} from 'react-native';

class ComicDetail extends Component {
  state = {  }
  _renderItem = ({item}) => <Image style={{height: 300}} source ={{uri: item}}/>
  _keyExtractor = (item, index) => item
  render() {
    return (
      <FlatList
        data={this.props.navigation.state.params.comic.photos}
        extraData={this.props.navigation.state.params.comic.photos}
        renderItem = {this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

export default ComicDetail