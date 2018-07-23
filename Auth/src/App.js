import React from 'react';
import { View } from 'react-native';

import firebase from 'firebase';

import { Header } from './components/common';

import LoginForm from './components/LoginForm';

export default class App extends React.Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBih37tBncSr-By-et_ELBpZ9CVSXnPzCQ',
            authDomain: 'auth-rncourse.firebaseapp.com',
            databaseURL: 'https://auth-rncourse.firebaseio.com',
            projectId: 'auth-rncourse',
            storageBucket: 'auth-rncourse.appspot.com',
            messagingSenderId: '78031554189'
          });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}
