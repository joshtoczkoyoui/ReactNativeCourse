import React from 'react';
import { View, Text } from 'react-native';

const Spinner = ({ size }) => (
    <View style={styles.spinnerStyle}>
        {/* <ActivityIndicator size={size || 'large'} /> */}
        <Text>ActivityIndicator Placeholder</Text>
    </View>
);

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export { Spinner };
