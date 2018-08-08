import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { Card, CardSection, Button } from './common';

import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends React.Component {
    onButtonPress() {
        const { name, phone, workShift } = this.props;

        this.props.employeeCreate({ name, phone, workShift: workShift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                    >
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        name,
        phone,
        workShift,
    } = state.employeeForm;

    return { name, phone, workShift };
};

export default connect(mapStateToProps, actions)(EmployeeCreate);
