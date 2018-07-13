import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import StarRating from 'react-native-star-rating';
import Star from 'react-native-star-rating'
class RatingBar extends Component {
  state = {
    starcount: this.props.data.rate
  }
  onRating = (rating) => {
    this.setState({
      starcount: rating
    })
  }
  render() {
    return (
      <View
        style={{ flex: 1 }}
      >
        <Star
          disabled={false}
          maxStars={5}
          rating={this.props.data.rate}
          starSize={20}
          selectedStar={(rating) => { this.onRating(rating) }}
          starStyle={{ width: 15 }}
          // iconSet = {iconSet.getImageSource({uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Five-pointed_star.svg'})}
        />
      </View>


    );
  }
}

export default RatingBar;