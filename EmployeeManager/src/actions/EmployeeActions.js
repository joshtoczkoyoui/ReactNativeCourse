import * as type from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: type.EMPLOYEE_UPDATE,
        payload: { prop, value },
    };
};
