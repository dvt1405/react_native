import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    Image
} from 'react-native';

const matches = [
    {
        team1: 'Uruguay',
        team2: 'France',
        flag1: require('./img/uruguay.png'),
        flag2: require('./img/france.png'),
        date: 'jul 6 2018 - 21:00'
    },
    {
        team1: 'Brazil',
        team2: 'Belgium',
        flag1: require('./img/brazil.png'),
        flag2: require('./img/belgium.png'),
        date: 'jul 7 2018 - 1:00'
    },
    {
        team1: 'Russia',
        team2: 'Croatia',
        flag1: require('./img/russia.png'),
        flag2: require('./img/croatia.png'),
        date: 'jul 7 2018 - 21:00'
    },
    {
        team1: 'England',
        team2: 'Germany',
        flag1: require('./img/england.png'),
        flag2: require('./img/germany.png'),
        date: 'jul 8 2018 - 1:00'
    }
]
class Schedule extends Component {
    state = {}
    render() {
        const match = matches.map((match, index) =>
            <View
                style={styles.matchView}
                key={index}
            >
                <View
                    style={styles.matchDateView}
                >
                    <Text> {match.date} </Text>
                </View>
                <View
                    style={styles.match}
                >
                    <Text style={styles.matchIcon1}>{match.team1}</Text>
                    <Image
                        source={match.flag1}
                        style={styles.matchIconFlag}
                    />
                    <Text>vs</Text>
                    <Image
                        source={match.flag2}
                        style={styles.matchIconFlag}
                    />
                    <Text style={styles.matchIcon2}>{match.team2}</Text>
                </View>
            </View>
        )
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>{this.props.textProps}</Text>
                {match}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1
    },
    headerView: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 25,
        color: '#507255',
        marginBottom: 5,
        fontWeight: 'bold',
        opacity:0
    },
    headerLogo: {
        width: 80,
        height: 150,
        opacity: 0.33,
        marginBottom: 40
    },
    matchView: {
        flex: 1,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E2E5E3',
        borderRadius: 10,
        marginBottom: 10
    },
    matchDateView: {
        flex: 0.3,
        marginBottom: 5

    },
    match: {
        flex: 1,
        flexDirection: 'row'
    },
    matchIconFlag: {
        flex: 1,
        width: 30,
        height: 30,
        marginLeft: 10,
        marginRight: 10
    },
    matchIcon1: {
        flex: 1,
        paddingLeft: 9,
    },
    matchIcon2: {
        flex: 1,
        paddingRight: 9
    }
});

export default Schedule;