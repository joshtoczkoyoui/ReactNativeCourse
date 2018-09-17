import * as type from '../actions/types';

const INITIAL_STATE = {
    email: 'test@test.com',
    password: 'password',
    user: null,
    error: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case type.EMAIL_CHANGED:
            return { ...state, email: action.payload };

        case type.PASSWORD_CHANGED:
            return { ...state, password: action.payload };

        case type.LOGIN_USER:
            return { ...state, loading: true, error: '' };

        case type.LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };

        case type.LOGIN_USER_FAIL:
            return { ...state, error: 'Login failed.', loading: false };

        default:
            return state;
    }
};
