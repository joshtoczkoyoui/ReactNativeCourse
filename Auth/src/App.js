import React from 'react';
import { View } from 'react-native';

import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';

import LoginForm from './components/LoginForm';

export default class App extends React.Component {
    state = {
        loggedIn: null,
    };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBih37tBncSr-By-et_ELBpZ9CVSXnPzCQ',
            authDomain: 'auth-rncourse.firebaseapp.com',
            databaseURL: 'https://auth-rncourse.firebaseio.com',
            projectId: 'auth-rncourse',
            storageBucket: 'auth-rncourse.appspot.com',
            messagingSenderId: '78031554189'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </View>
                );

            case false:
                return <LoginForm />;

            default:
                return <Spinner />;
        }  
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}
