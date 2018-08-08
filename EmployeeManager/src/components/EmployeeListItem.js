import React from 'react';
import { View, Text, TouchableWithoutFeedback, NativeModules, LayoutAnimation } from 'react-native';

// // Redux
// import { connect } from 'react-redux';
// import * as actions from '../actions';

import { Actions } from 'react-native-router-flux';

// Common
import { CardSection } from './common';

// const { UIManager } = NativeModules;
// UIManager.setLayoutAnimationEnabledExperimental(true);

class EmployeeListItem extends React.Component {
    // componentWillUpdate() {
    //     LayoutAnimation.spring();
    // }

    // getTitleStyle() {
    //     const { 
    //         titleStyle,
    //         highlightedTitleStyle,
    //     } = styles;

    //     if (this.props.expanded) {
    //         return highlightedTitleStyle;
    //     }

    //     return titleStyle;
    // }

    // renderDescription() {
    //     const { library, expanded } = this.props;

    //     if (expanded) {
    //         return (
    //             <CardSection>
    //                 <Text style={styles.descriptionStyle}>{library.description}</Text>
    //             </CardSection>
    //         );
    //     }
    // }

    onSelectEmployee() {
        Actions.employeeCreate({ employee: this.props.employee });
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
            
            // <TouchableWithoutFeedback 
            //     onPress={() => this.props.selectLibrary(id)}
            // >
            //     <View>
            //         <CardSection>
            //             <Text style={this.getTitleStyle()}>
            //                 {title}
            //             </Text>
            //         </CardSection>
            //         {this.renderDescription()}
            //     </View>
            // </TouchableWithoutFeedback>
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

// const mapStateToProps = (state, ownProps) => {
//     const expanded = state.selectedLibraryId === ownProps.library.id;

//     return { expanded };
// };

//export default connect(mapStateToProps, actions)(EmployeeListItem);
export default EmployeeListItem;
