import React from 'react';
import { View } from 'react-native';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// Common custom components
import { Header } from './components/common';

// Import components
import LibraryList from './components/LibraryList';

const App = () => (
    <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
            <Header headerText="Tech Stack" />
            <LibraryList />
        </View>
    </Provider>
);

export default App;
