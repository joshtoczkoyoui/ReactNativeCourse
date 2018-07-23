import React from 'react';
//import { TextInput } from 'react-native';

import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends React.Component {
    state = { 
        email: '',
        password: '',
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="username@gmail.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        autoCorrect={false}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        autoCorrect={false}
                        secureTextEntry
                    />
                </CardSection>
                
                <CardSection>
                    <Button onPress={() => { console.log(this.state.email); }}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
