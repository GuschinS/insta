import React from 'react';
import {Link} from 'react-router-dom';
const User = (props) => {
    const {src, alt, name, min} = props;

    return(
        <Link to = '/profile/' className = {min ? 'user min' : 'user'}>
            <img src = {src} alt = {alt}></img>
            <div>{name}</div>
        </Link>
        // <a href = '#' className = {min ? 'user min' : 'user'}>
        //     <img src = {src} alt = {alt}></img>
        //     <div>{name}</div>
        // </a>
    )
}

export default User;