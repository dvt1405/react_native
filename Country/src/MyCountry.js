import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';
class MyCountry extends Component {
    state = {
        data: this.props.navigation.state.params.CountryDetail
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: `https://www.countryflags.io/${this.state.data.alpha2Code}/flat/64.png` }}
                    style={styles.img}
                />
                <View style = {styles.infor}>
                    <Text style ={styles.text}>Country:  {this.state.data.name}</Text>
                    <Text style ={styles.text}>Capital:  {this.state.data.capital}</Text>
                    <Text style ={styles.text}>Subregion:    {this.state.data.subregion}</Text>
                    <Text style ={styles.text}>Population:   {this.state.data.population}</Text>
                    <Text style ={styles.text}>Area:   {this.state.data.area} km2</Text>
                </ View>
            </View>
        );
    }
}
const window = Dimensions.get('window')
const window_width = Math.min(window.width, window.height)
const styles = StyleSheet.create({
    img: {
        width: window_width * 0.5 * 0.5,
        height: 100
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infor: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    text: {
        fontSize: 16
    }
})
export default MyCountry;