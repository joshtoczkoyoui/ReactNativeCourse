import _ from 'lodash';
import React from 'react';
import { FlatList, View, Text } from 'react-native';

import EmployeeListItem from './EmployeeListItem';

import { connect } from 'react-redux';

import * as actions from '../actions';

class EmployeeList extends React.Component {
    componentWillMount() {
        this.props.fetchEmployees();   
    }

    renderItem({ item }) {
		return <EmployeeListItem employee={item} />;
    }
    
	render() {
		return (
			<FlatList
				data={this.props.employees}
				renderItem={this.renderItem.bind(this)}
				keyExtractor={(employee, index) => index.toString()}
			/>
		);
	}
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
 
    return { employees };
};

export default connect(mapStateToProps, actions)(EmployeeList);
