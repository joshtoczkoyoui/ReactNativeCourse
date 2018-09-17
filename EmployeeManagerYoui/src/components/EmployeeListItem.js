import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import { Actions } from 'react-native-router-flux';

// Common
import { CardSection } from './common';

class EmployeeListItem extends React.Component {
    onSelectEmployee() {
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        const { name } = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this.onSelectEmployee.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    },
    highlightedTitleStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 15,
        backgroundColor: 'lightblue',
    },
    descriptionStyle: {
        paddingLeft: 18,
        paddingRight: 18,
    },
};

export default EmployeeListItem;
