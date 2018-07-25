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

export const loginUser = ({ email, password }) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => console.log(user));
};
