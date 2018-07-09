import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './Screens/Home'
import LoginFrm from './Screens/LoginFrm'

export const HomeStack = createStackNavigator({
    Login_Screen: {
        screen: LoginFrm,
        navigationOptions: {
            header: null,
        }
    },
    Home_Screen: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    }
})