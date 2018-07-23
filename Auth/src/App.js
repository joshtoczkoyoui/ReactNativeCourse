import React from 'react';
import { Text, View } from 'react-native';

import firebase from 'firebase';

import { Header } from './components/common';

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
                <Text>App Latest</Text>
            </View>
        );
    }
}
