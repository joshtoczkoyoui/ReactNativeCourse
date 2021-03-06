import * as type from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    workShift: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case type.EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };

        case type.RESET_FORM:
            return INITIAL_STATE;

        default:
            return state;
    }
};
