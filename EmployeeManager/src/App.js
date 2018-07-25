import React from 'react';
import { View } from 'react-native';

// 3rd Party
import firebase from 'firebase';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

// Common components
import { Header } from './components/common';

// Components
import LoginForm from './components/LoginForm';

class App extends React.Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAfi87Z53znu5ThzYKKI1xVKrvBinh3FuM',
            authDomain: 'employeemanager-rncourse.firebaseapp.com',
            databaseURL: 'https://employeemanager-rncourse.firebaseio.com',
            projectId: 'employeemanager-rncourse',
            storageBucket: 'employeemanager-rncourse.appspot.com',
            messagingSenderId: '919711418066'
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <View>
                    <Header headerText='Manager' />
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;
