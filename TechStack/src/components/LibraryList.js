import React from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

class LibraryList extends React.Component {
    render() {
        return <Text>Lib List</Text>;
    }
}

export default connect()(LibraryList);
