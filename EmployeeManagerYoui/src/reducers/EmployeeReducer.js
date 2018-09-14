import * as type from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case type.EMPLOYEES_FETCH_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};
