import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => (
    <Router>
        <Scene key="root" hideNavBar>
            <Scene key="auth">
                <Scene key="login" title="Please Login" component={LoginForm} initial />
            </Scene>

            <Scene key="main">
                <Scene
                    key="employeeList"
                    title="Employees"
                    component={EmployeeList}
                    initial

                    rightTitle="Add"
                    onRight={() => { Actions.employeeCreate(); }}
                />
                <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
                <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
            </Scene>
        </Scene>
    </Router>
);

export default RouterComponent;
