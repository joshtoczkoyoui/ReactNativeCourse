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

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => {
            console.log(error);
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(loginUserFail(dispatch));
        });
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: type.LOGIN_USER_SUCCESS, payload: user });

    Actions.main();
};

const loginUserFail = (dispatch) => {
    dispatch({ type: type.LOGIN_USER_FAIL });
};
