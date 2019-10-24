import React, {Component} from 'react';
// import Post from './Post';
import InstaService from '../services/instaService';
import User from './User';
import ErrorMessage from './Error';

export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }
    componentDidMount(){
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostLoaded)
        .catch(this.onError);
    }

    onPostLoaded = (posts) => {
        this.setState({
            posts, //posts: posts,
            error: false
        });
        console.log(this.state.posts)
        
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, altname, photo,src, alt, descr, id} = item;

            return (
                <div key = {id} className = 'post'>
                    <User src = {photo}
                    alt = {altname}
                    name = {name}
                    min/>
                    <img src = {src} alt = {alt}></img>
                    <div className = 'post__name'>
                        {name}
                    </div>
                    <div className = 'post__descr'>
                        {descr}
                    </div>
                </div>
            )
        });
    }
    render() {
        const {error, posts} = this.state;

        if(error) {
            return <ErrorMessage />
        }
        const items = this.renderItems(posts);
        return(
            <div className = 'left'>
                {/* <Post src = 'https://i.ytimg.com/vi/NC2G6tbAQpg/maxresdefault.jpg' alt = 'sail' />
                <Post src = 'http://www.sailboatproject.org/wp-content/uploads/2019/06/IMG_0392.jpg' alt = 'sail2' /> */}
                {items}
            </div>
        )
    }
}