import React, { Component } from 'react';
import {
  FlatList,
  Dimensions
} from 'react-native';
import ScaledImage from './ScaledImage'
class ComicDetail extends Component {
  state = {  }
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params.comic.title
    }
  }
  _renderItem = ({item}) => <ScaledImage uri = {item} width={Dimensions.get('window').width}/>
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