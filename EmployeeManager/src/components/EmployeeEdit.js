import _ from 'lodash';
import React from 'react';

import Communications from 'react-native-communications';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { Card, CardSection, Button, ConfirmModal } from './common';

import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends React.Component {
    state = {
        showModal: false
    };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    componentWillUnmount() {
        this.props.resetForm();
    }

    onSaveButtonPress() {
        const { name, phone, workShift, employee } = this.props;

        this.props.employeeSave({ name, phone, workShift, uid: employee.uid });
    }

    onTextButtonPress() {
        const { phone, workShift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${workShift}`);
    }

    onFireButtonPress() {
        this.setState({ showModal: !this.state.showModal });
    }

    onAccept() {
        const { employee } = this.props;

        this.props.employeeDelete({ uid: employee.uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onSaveButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                
                <CardSection>
                    <Button onPress={this.onTextButtonPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onFireButtonPress.bind(this)}>
                        Fire Employee
                    </Button>
                </CardSection>

                <ConfirmModal
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to fire {this.props.name}?
                </ConfirmModal>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, workShift } = state.employeeForm;

    return { name, phone, workShift };
};

export default connect(mapStateToProps, actions)(EmployeeEdit);
