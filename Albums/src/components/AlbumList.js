import React from 'react';
import { View, Text } from 'react-native';

export default class AlbumList extends React.Component {
    state = { albums: [] };
    
    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => response.json())
            .then(responseJSON => {
                this.setState({ albums: responseJSON });
            });
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <Text key={album.title}>{album.title}</Text>
        );
    }

    render() {
        console.log('Renderahh');
        console.log(this.state);
        
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}
