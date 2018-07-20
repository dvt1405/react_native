import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    RefreshControl,
    ActivityIndicator
} from 'react-native';
import ModalSelector from 'react-native-modal-selector'
import axios from 'axios'
class ListCountry extends Component {
    state = {
        data: [],
        refreshing: false,
        detail: [],
        refresh: true
    }
    componentDidMount() {
        this._refreshData()
    }
    componentWillUnmount() {

    }
    _refreshData = () => {
        axios.get('https://restcountries.eu/rest/v2/all').then((res) => this.setState({
            data: res.data,
            refreshing: false
        }))
    }
    _renderItem = ({ item }) => (
        <TouchableOpacity>
            <Text>{item.name}</Text>
        </TouchableOpacity>

    )
    _onRefresh = () => {
        this.setState({ refreshing: true })
        this._refreshData()
    }
    render() {
        return (
            <View>
                <ActivityIndicator animating={this.state.refreshing} color='#0000ff'/>
                <FlatList
                    data={this.state.data}
                    extraData={this.state}
                    renderItem={({ item, index }) => <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Detail', { CountryDetail: this.state.data[index] })
                        }}
                    >
                        <View style={styles.item}>
                            <Text>{index + 1}: </Text>
                            <Text>{item.name}</Text>
                        </View>
                    </TouchableOpacity>}
                    keyExtractor={(item, index) => index.toString()}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
})
export default ListCountry;