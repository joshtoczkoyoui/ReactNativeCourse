import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends React.Component {
    renderItem({ item }) {
        return <ListItem library={item} />;
    }
    
    render() {
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(item, id) => id.toString()}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    libraries: state.libraries
});

export default connect(mapStateToProps)(LibraryList);
