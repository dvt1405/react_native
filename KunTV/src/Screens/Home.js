import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Dimensions,
    Image,
    ImageBackground,
    TouchableOpacity,
    WebView
} from 'react-native';
class Home extends Component {

    state = {}
    render() {
        return (
            <WebView
                source={{ uri: 'https://instagram.com' }}
                style={{ marginTop: 20 }}
            />
        );
    }
}

const window = Dimensions.get('window')
const windowWidth = Math.min(window.width, window.height)
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    homeView: {
        flex: 0.95,
        backgroundColor: 'red'
    },
    controlView: {
        flex: 0.05,
        flexDirection: 'row',
        backgroundColor: 'violet'
    }
});

export default Home;