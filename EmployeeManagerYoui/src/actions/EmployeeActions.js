import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import * as type from './types';

export const fetchEmployees = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: type.EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: type.EMPLOYEE_UPDATE,
        payload: { prop, value },
    };
};

export const employeeCreate = ({ name, phone, workShift }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, workShift })
            .then(() => {
                Actions.pop();
            });
    };
};

export const employeeSave = ({ name, phone, workShift, uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, workShift })
            .then(() => {
                Actions.pop();
            });
    };
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                Actions.pop();
            });
    };
};

export const resetForm = () => {
    return {
        type: type.RESET_FORM
    };
};
