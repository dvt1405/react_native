import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import BigNumber from '../node_modules/bignumber.js';


class BigItem extends Component {
    state = {
        data: this.props.data,
        rain: require('./img/rain.png'),
        clouds: require('./img/clouds.png'),
        snow: require('./img/snow.png'),
        clear: require('./img/clear.png'),

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.img_view}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Image
                            style={styles.img}
                            source={this.props.data.weather[0].main.toString().toLowerCase() == 'rain'
                                ? this.state.rain
                                : this.props.data.weather[0].main.toString().toLowerCase() == 'clouds'
                                    ? this.state.clouds
                                    : this.props.data.weather[0].main.toString().toLowerCase() == 'snow'
                                        ? this.state.snow
                                        : this.props.data.weather[0].main.toString().toLowerCase() == 'clear'
                                            ? this.state.clear : ''
                            }
                        />
                        <View >
                            <Text style={styles.main_text}>{this.props.data.weather[0].main}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={styles.temp_text}>
                            {this.props.temp == 1
                                ? new BigNumber(this.props.data.temp.day - 273).toFormat(2).toString()
                                : new BigNumber((this.props.data.temp.day - 273) * 1.8 + 32).toFormat(2).toString()}
                        </Text>
                        <View style={[styles.img_view]}>
                        <TouchableOpacity
                            onPress={this.props.onPress1}
                        >
                            <Text style={styles.main_text}>°C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.props.onPress2}
                        >
                            <Text style={styles.main_text}>°F</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
                <View style={styles.img_view}>
                    {/* <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={styles.main_text}>{this.props.data.weather[0].main}</Text>
                    </View> */}
                    {/* <View style={[styles.img_view]}>
                        <TouchableOpacity
                            onPress={this.props.onPress1}
                        >
                            <Text style={styles.main_text}>°C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.props.onPress2}
                        >
                            <Text style={styles.main_text}>°F</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        margin: 15,
        width: Dimensions.get('window').width * 1,

    },
    img_view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',

    },
    img: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.4
    },
    temp_text: {
        fontSize: 40,
        color: '#fff',
        // opacity: this.props.temp == 1 ? 0.5 : 1
    },
    main_text: {
        fontSize: 25,
        color: '#fff'
    },
    main_view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default BigItem;