import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

// Redux
import { connect } from 'react-redux';
import * as actions from '../actions';

// Common
import { CardSection } from './common';

class ListItem extends React.Component {
    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={styles.descriptionStyle}>{library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { 
            titleStyle,
        } = styles;

        const {
            id,
            title,
        } = this.props.library;

        return (
            <TouchableWithoutFeedback 
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
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
    descriptionStyle: {
        paddingLeft: 17,
        paddingRight: 17,
    },
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
