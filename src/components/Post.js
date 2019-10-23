import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return(
            <div className = 'post'>
                <User src = 'https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg'
                alt = 'user'
                name = 'SG'
                min/>
                <img src = {this.props.src} alt = {this.props.alt}></img>
                <div className = 'post__name'>
                    some account
                </div>
                <div className = 'post__descr'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor necessitatibus nihil velit minus minima aliquid non aut fugit sapiente ipsam libero incidunt, doloribus voluptatibus enim sint placeat nobis omnis iure?
                </div>
            </div>
        )
    }
}