import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return(
            <div className = 'left'>
                <Post src = 'https://i.ytimg.com/vi/NC2G6tbAQpg/maxresdefault.jpg' alt = 'sail' />
                <Post src = 'http://www.sailboatproject.org/wp-content/uploads/2019/06/IMG_0392.jpg' alt = 'sail2' />

            </div>
        )
    }
}