import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

class HeaderTitle extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.img}
            source={require('../img/backicon.png')}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>{this.props.title}</Text>
        <TouchableOpacity>
          <Image
            style={styles.img}
            source={require('../img/iconmenu.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const window = Dimensions.get('window')
const windowWidth = Math.min(window.width, window.height)
const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0.095,
    backgroundColor: '#DDDADF'
  },
  img: {
    width: 45,
    height: 45,
    opacity: 0.5
  }
})
export default HeaderTitle;