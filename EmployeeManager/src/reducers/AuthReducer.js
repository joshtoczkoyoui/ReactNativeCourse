import * as type from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case type.EMAIL_CHANGED:
            return { ...state, email: action.payload };

        case type.PASSWORD_CHANGED:
            return { ...state, password: action.payload };

        default:
            return state;
    }
};
