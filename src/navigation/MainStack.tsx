import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from '../screens/MainScreen';

const Tab = createBottomTabNavigator();

const MainStack = () => {
    return (
        <Tab.Navigator initialRouteName="MainScreen">
            <Tab.Screen component={MainScreen} name="MainScreen" />
        </Tab.Navigator>
    );
};

export default MainStack;
