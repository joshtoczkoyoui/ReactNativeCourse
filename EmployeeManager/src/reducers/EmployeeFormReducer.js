import * as type from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    workShift: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case type.EMPLOYEE_UPDATE:
            // action.payload === { prop: 'name', value: 'jane' }


            return { ...state, [action.payload.prop]: action.payload.value };

        default:
            return state;
    }
};