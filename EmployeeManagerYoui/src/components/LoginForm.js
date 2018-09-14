import React from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../actions';

// Common components
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends React.Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onLoginButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderLoginButton() {
        if (this.props.loading) {
            return <Spinner />;
        }
        
        return (
            <Button onPress={this.onLoginButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    renderError() {
        const { errorContainerStyle, errorTextStyle } = styles;

        if (this.props.error) {
            return (
                <View style={errorContainerStyle}>
                    <Text style={errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        autoCorrect={false}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        autoCorrect={false}
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderLoginButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorContainerStyle: {
        backgroundColor: 'white',
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    },
};

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading,
    };
};

export default connect(mapStateToProps, actions)(LoginForm);
