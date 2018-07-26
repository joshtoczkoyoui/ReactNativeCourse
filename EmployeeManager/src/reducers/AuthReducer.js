import * as type from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case type.EMAIL_CHANGED:
            return { ...state, email: action.payload };

        case type.PASSWORD_CHANGED:
            return { ...state, password: action.payload };

        case type.LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload };

        case type.LOGIN_USER_FAIL:
            return { ...state, error: 'Login failed.' };

        default:
            return state;
    }
};
