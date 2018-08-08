import React from 'react';
import { View, Text, Picker } from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends React.Component {
    onButtonPress() {
        const { name, phone, workShift } = this.props;

        this.props.employeeCreate({ name, phone, workShift: workShift || 'Monday' });
    }

    render() {
        const {
            pickerLabelStyle,
            pickerCardSectionStyle,
        } = styles;

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection style={pickerCardSectionStyle}>
                    <Text style={pickerLabelStyle}>Select a Work Shift</Text>
                    <Picker
                        selectedValue={this.props.workShift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'workShift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>

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

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 10,
    },
    pickerCardSectionStyle: {
        flexDirection: 'column',
    },
};

const mapStateToProps = (state) => {
    const {
        name,
        phone,
        workShift,
    } = state.employeeForm;

    return { name, phone, workShift };
};

export default connect(mapStateToProps, actions)(EmployeeCreate);
