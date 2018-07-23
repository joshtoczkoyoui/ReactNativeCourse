import React from 'react';
import { TextInput } from 'react-native';

import { Button, Card, CardSection } from './common';

export default class LoginForm extends React.Component {
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput 
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                        style={{ height: 40, width: 100 }}
                    />
                </CardSection>

                <CardSection>
                    <TextInput 
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                </CardSection>
                
                <CardSection>
                    <Button onPress={() => { console.log(this.state.text); }}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
