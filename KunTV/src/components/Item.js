import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import RatingBar from '../components/RatingBar'
class Item extends Component {
    state = {}
    render() {
        return (
            <View
                style={styles.container}
            >
                <TouchableOpacity style={styles.logoView}>
                    <Image
                        style={styles.image}
                        source={{ uri: this.props.data.logo }}
                    />
                </TouchableOpacity>
                <View style={styles.textView}>
                    <View style={styles.headerView}>
                        <Text style={styles.brandText} >{this.props.data.brand}</Text>
                    </View>
                    <View style={styles.bodyView}>
                        <Text style={styles.addressText}>{this.props.data.address}</Text>
                    </View>
                    <View
                        style={styles.bottomView}
                    >
                        <RatingBar data={this.props.data} />
                        <Text style={styles.kindText}>{this.props.data.kind}</Text>
                        <Text style={{ flex: 1, color: '#AAACB1' }}>{this.props.data.distance} mile</Text>
                    </View>
                </View>
            </View >
        );
    }
}
const window = Dimensions.get('window')
const windowWidth = Math.min(window.width, window.height)
const styles = StyleSheet.create({
    image: {
        width: windowWidth * 0.3 * 0.6,
        height: windowWidth * 0.3 * 0.6,
        borderRadius: 100
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#E1E1E3',
        marginBottom: 2,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textView: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 0.7
    },
    headerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bodyView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoView: {
        width: windowWidth * 0.3,
        backgroundColor: '#E1E1E3',
        alignItems: 'center',
        paddingRight: 1,
        flex: 0.3,
        borderRadius: 5
    },
    brandText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#888B92'
    },
    kindText: {
        fontSize: 15,
        flex: 1,
        paddingLeft: 20,
        color: '#AAACB1'
    },
    addressText: {
        fontSize: 17,
        color: '#B1AEB3',
        fontWeight: 'bold',
    }
})

export default Item;