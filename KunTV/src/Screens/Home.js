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
    FlatList
} from 'react-native';
import { data } from '../database/data.json';
import Item from '../components/Item';
class Home extends Component {

    state = {

    }
    _renderItem = ({ item }) => (<View>
        <Item 
            data ={item}

        />
    </View>)
    _keyExtractor = (item, index) => item.id
    render() {
        return (
            <View>
                <FlatList
                    data={data}
                    extraData= {data}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
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