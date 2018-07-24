import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Dimensions,
    View,
    Text,
    FlatList,
} from 'react-native';
import Timestamp from 'react-timestamp'
import BigNumber from '../node_modules/bignumber.js';
class List extends Component {
    state = {
        data: '',
        rain: require('./img/rain.png'),
        clouds: require('./img/clouds.png'),
        snow: require('./img/snow.png'),
        clear: require('./img/clear.png'),
        
    }
    _renderItem = ({ item }) => (
        <View style={styles.container}>
            <View style={styles.date_view}>
                <Timestamp
                    time={item.dt}
                    format='date'
                    component={Text}
                    style={styles.temp} />
            </View>
            <View style={styles.img_view}>
                <Text
                    style={styles.temp}
                >
                    {this.props.temp == 1 
                        ? new BigNumber(item.temp.day - 273).toFormat(2).toString()
                        : new BigNumber((item.temp.day - 273) * 1.8 + 32).toFormat(2).toString()}
                </Text>
                <Image
                    style={styles.img}
                    source={item.weather[0].main.toString().toLowerCase() == 'rain'
                        ? this.state.rain
                        : item.weather[0].main.toString().toLowerCase() == 'clouds'
                            ? this.state.clouds
                            : item.weather[0].main.toString().toLowerCase() == 'snow'
                                ? this.state.snow
                                : item.weather[0].main.toString().toLowerCase() == 'clear'
                                    ? this.state.clear : ''
                    }
                />
            </View>
        </View>
    )
    _keyExtractor = (item, index) => index.toString()
    render() {
        return (
            <FlatList
                data={this.props.data}
                numColumns={1}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
            />
        );
    }
}
const window_width = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.88,
        flexDirection: 'row',
        backgroundColor: '#2E2B3E',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        height: 60
    },
    img_view: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    date_view: {
        flex: 1,
        alignItems: 'center',
    },
    img: {
        width: window_width * 0.1,
        height: window_width * 0.1
    },
    temp: {
        color: '#fff',
        marginRight: 10,
    }

})
export default List;