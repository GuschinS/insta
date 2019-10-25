import React from 'react';
import User from './User';
import Palette from './Palette';


const Profile  = () => {
    return (
        <div className = 'container profile'>
            <User src = 'https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg'
            alt = 'user'
            name = 'SG'/>
            <Palette/>
        </div>
    )
}

export default Profile;