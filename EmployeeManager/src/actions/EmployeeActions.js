import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import * as type from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: type.EMPLOYEE_UPDATE,
        payload: { prop, value },
    };
};

export const employeeCreate = ({ name, phone, workShift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, workShift })
            .then(() => {
                dispatch({ type: type.EMPLOYEE_CREATE });
                Actions.pop();
            });
    };
};

export const fetchEmployees = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: type.EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};
