import firebase from 'firebase';

import * as type from './types';

export const emailChanged = (text) => ({
    type: type.EMAIL_CHANGED,
    payload: text,
});

export const passwordChanged = (text) => ({
    type: type.PASSWORD_CHANGED,
    payload: text,
});

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: type.LOGIN_USER_SUCCESS, payload: user });
};

const loginUserFail = (dispatch) => {
    dispatch({ type: type.LOGIN_USER_FAIL });
}; 

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(loginUserFail(dispatch));
        });
    };
};
