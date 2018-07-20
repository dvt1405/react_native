import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    Dimensions
} from 'react-native';
import { width } from 'window-size';

class ScaledImage extends Component {
    state = {
        height: 0
    }
    componentDidMount() {
        Image.getSize(this.props.uri, (realWidth, realHeight) => {
            this.setState({
                height: realHeight * this.props.width / realWidth
            })
        })
    }
    render() {
        return (
            <Image
                source={{ uri: this.props.uri }}
                style={{ height: this.state.height, width: this.props.width }}
            />
        );
    }
}

export default ScaledImage;