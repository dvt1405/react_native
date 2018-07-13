import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './Screens/Home'
import LoginFrm from './Screens/LoginFrm'
import HeaderTitle from './components/HeaderTitle'
export const HomeStack = createStackNavigator({
    Home_Screen: {
        screen: Home,
        navigationOptions: {
            header: <HeaderTitle title = "Cinema"/>,
            headerStyle: {
                backgroundColor: '#DDDADF',
                height: 50
              },
        }
    },
    Login_Screen: {
        screen: LoginFrm,
        navigationOptions: {
            title: <titleHome />,
        }
    }
})