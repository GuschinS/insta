import React, {Component} from 'react';
import InstaService from '../services/instaService';
import ErrorMessage from './Error';
import LoadingMessage from './Loading';

export default class Palette extends Component {
    InstaService = new InstaService();
    state = {
        error: false,
        photos: [],
        loading: true
    }
    componentDidMount(){
        this.updatePhotos();
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
            .then(this.onPhotosLoaded)
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            error: false,
            photos,
            loading: false //posts: posts,
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {src, alt} = item;
            return (
                <img src = {src} alt = {alt}></img>
            )
        })
    }

    render () {
        const {error, photos} = this.state;
        const {loading} = this.state;
        if(error) {
            return <ErrorMessage/>
        }
        else if(loading) {
            return <LoadingMessage/>
        } else {
            const items = this.renderItems(photos);
        return (
            <div className = 'palette'>
                {items}
            </div>
        )
        }
        
    }
}