import React from 'react';

import { Dimensions } from 'react-native';

import Trends from './screens/trends';

import { DrawerItems, createDrawerNavigator, createStackNavigator } from 'react-navigation';

var { height, width } = Dimensions.get('window');

const AdyaxNavigator = createStackNavigator(
    {
        Trends: {
            screen: Trends,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'Trends',
        headerMode: 'none'
    }
)

export const AppNavigator = createStackNavigator(
    {
        AdyaxNavigator: {
            screen: AdyaxNavigator,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'AdyaxNavigator'
    }
);