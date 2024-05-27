import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../components/Title';
import { SafeAreaView } from 'react-native-safe-area-context';
import useSomething from '../hooks/useSomething';

const MainScreen = () => {
    const [something] = useSomething();

    console.log('hook value =', something);

    return (
        <SafeAreaView style={styles.safeAreaViewStyle}>
            <View style={styles.container}>
                <Title>Main Title</Title>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaViewStyle: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MainScreen;
