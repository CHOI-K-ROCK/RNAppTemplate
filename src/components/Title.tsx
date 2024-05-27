import React from 'react';
import { StyleSheet, Text } from 'react-native';

type Props = {
    children: string;
};

const Title = (props: Props) => {
    const { children } = props;

    return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: '600',
    },
});
export default Title;
