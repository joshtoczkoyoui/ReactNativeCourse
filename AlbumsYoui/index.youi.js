// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const YiReactApp = () => (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

// Render it to the device
AppRegistry.registerComponent('YiReactApp', () => YiReactApp);
