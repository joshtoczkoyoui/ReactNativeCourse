import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Header } from './components/common';

const App = () => (
    <Provider store={createStore}>
        <View>
            <Header headerText="Tech Stack Docs" />
            <Text>Hello great</Text>
        </View>
    </Provider>
);

export default App;
