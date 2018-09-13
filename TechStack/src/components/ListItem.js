import React from 'react';
import { View, Text, TouchableWithoutFeedback, NativeModules, LayoutAnimation, Platform } from 'react-native';

// Redux
import { connect } from 'react-redux';
import * as actions from '../actions';

// Common
import { CardSection } from './common';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends React.Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

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

    getTitleStyle() {
        const { 
            titleStyle,
            highlightedTitleStyle,
        } = styles;

        if (this.props.expanded) {
            return highlightedTitleStyle;
        }

        return titleStyle;
    }

    render() {
        const { id, title, } = this.props.library;

        return (
            <TouchableWithoutFeedback 
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={this.getTitleStyle()}>
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

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
