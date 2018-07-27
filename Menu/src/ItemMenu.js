import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
class ItemMenu extends Component {

    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Image
                    source={{ uri: this.props.uri }}
                    style={styles.img}
                />
                <View style={styles.content_view}>
                    <Text style={styles.content}
                        numberOfLines={2}
                    >{this.props.name}</Text>
                    <View style={styles.rating_view}>
                        {Array.from(new Array(this.props.rate)).map((item, index) => <View
                            style={styles.rate_item} key={index} />)}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
const width = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        margin: 20,
        alignItems: 'center',
        marginRight: 10,
    },
    img: {
        width: width*0.5,
        height: width*0.5,
        borderRadius: 1000
    },
    content_view: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    content: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    rating_view: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rate_item: {
        backgroundColor: 'blue',
        height: 5,
        width: 15,
        margin: 2,
        marginTop:  10,
    }
})
export default ItemMenu;