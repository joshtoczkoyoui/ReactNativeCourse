import React from 'react';
import { ScrollView } from 'react-native';

import AlbumDetail from './AlbumDetail';

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
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {        
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
