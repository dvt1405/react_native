import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Keyboard
} from 'react-native';

import Timestamp from 'react-timestamp'
class SearchBox extends Component {

    render() {
        return (
            <View>
                <View style={styles.search_box}>
                    <TextInput
                        style={styles.text_input}
                        underlineColorAndroid='#fff'
                        onChangeText={(value) => this.props.onChange(value)}
                        onEndEditing={()=> Keyboard.dismiss()}
                        value={this.props.value}
                    />
                    <TouchableOpacity
                        onPress={this.props.onPress}
                        style={styles.search_button}
                    >
                        <Text style={styles.search_text}>Search</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.location_view}>
                    <Text style={styles.location_text}>{this.props.location}</Text>
                    <Timestamp 
                        time={this.props.date}
                        component = {Text}
                        format='date'
                        style={styles.date_text}
                    />
                </View>

            </View >
        );
    }
}
const window = Dimensions.get('window')
const window_width = window.width
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    search_box: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    search_button: {
        width: window_width * 0.17,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 10,
    },
    text_input: {
        width: window_width * 0.7,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingLeft: 10,
    },
    location_view: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10 
    },
    location_text: {
        fontSize: 27,
        color: '#fff',
        margin: 15
    },
    date_text: {
        fontSize: 17,
        color: '#fff'
    },
    search_text: {
        fontSize: 15,
        color: '#39354C'
    }

})
export default SearchBox;