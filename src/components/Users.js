import React from 'react';
import User from './User';

export default function Users() {
    return(
        <div className = 'right'>
            <User src = 'https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg'
                alt = 'user'
                name = 'SG'/>
            <div className = 'users__block'>
                <User src = 'https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg'
                    alt = 'user'
                    name = 'SG'
                    min/>
                <User src = 'https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg'
                    alt = 'user'
                    name = 'SG'
                    min/>
                <User src = 'https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg'
                    alt = 'user'
                    name = 'SG'
                    min/>
                <User src = 'https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg'
                    alt = 'user'
                    name = 'SG'
                    min/>
            </div>
        </div>
    )
}