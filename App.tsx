/**
 * @format
 */

import React from 'react';

import { StatusBar, useColorScheme } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import MainStack from './src/navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? '#000' : '#FFF',
    };

    return (
        <NavigationContainer>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <MainStack />
        </NavigationContainer>
    );
}

export default App;
