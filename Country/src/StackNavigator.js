import {createStackNavigator} from 'react-navigation'
import ListCountry from './ListCountry';
import MyCountry from './MyCountry';

export const StackScreen = createStackNavigator({
    Home: {
        screen: ListCountry,
        navigationOptions: {
            title: 'Home'
        }
    },
    Detail: {
        screen: MyCountry,
        navigationOptions: {
            header: null
        }
    }
}) 