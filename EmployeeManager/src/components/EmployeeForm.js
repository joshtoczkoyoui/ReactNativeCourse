import React from 'react';
import { View, Text, Picker } from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { CardSection, Input } from './common';

class EmployeeForm extends React.Component {
    render() {
        return (
            <View>
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

                <CardSection style={styles.pickerCardSectionStyle}>
                    <Text style={styles.pickerLabelStyle}>Select a Work Shift</Text>
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
            </View>
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

export default connect(mapStateToProps, actions)(EmployeeForm);
