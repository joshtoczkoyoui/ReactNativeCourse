import { Keyboard } from 'react-native';

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import * as type from './types';

export const emailChanged = (text) => ({
    type: type.EMAIL_CHANGED,
    payload: text,
});

export const passwordChanged = (text) => ({
    type: type.PASSWORD_CHANGED,
    payload: text,
});

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: type.LOGIN_USER });

        console.log(email);
        console.log(password);
        console.log('signout');
        firebase.auth().signOut();
        console.log('signout2');
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => {
            console.log(error);
            console.log('try and create a new account');
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(loginUserFail(dispatch));
        });
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: type.LOGIN_USER_SUCCESS, payload: user });

    Keyboard.dismiss();
    Actions.main();
};

const loginUserFail = (dispatch) => {
    dispatch({ type: type.LOGIN_USER_FAIL });
};
