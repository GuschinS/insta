import React, {Component} from 'react';
import InstaService from '../services/instaService';
import ErrorMessage from './Error';
import LoadingMessage from './Loading';
import User from './User';
import {Link} from 'react-router-dom';

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        error: false,
        users: [],
        loading: true,
        min: true
    }
    componentDidMount(){
        this.updateUsers();
    }

    updateUsers() {
        this.InstaService.getAllUsers()
            .then(this.onUsersLoaded)
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    onUsersLoaded = (users) => {
        this.setState({
            error: false,
            users,
            loading: false //posts: posts,
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {photo, altname, name} = item;
            return (
                <Link to = '/profile/' className = 'user min'>
                    <img src = {photo} alt = {altname} name = {name}></img>
                    <div>{name}</div>
                </Link>
            )
        })
    }

    render () {
        const {error, users} = this.state;
        const {loading} = this.state;
        if(error) {
            return <ErrorMessage/>
        }
        else if(loading) {
            return <LoadingMessage/>
        } else {
            const items = this.renderItems(users);
        return (
            <div className = 'right'>
             <User src = 'https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg'
                 alt = 'user'
                 name = 'SG'/>
                <div className = 'users__block'>
                    {items}
                </div>
            </div>
        )
        }
        
    }
}


                    // {/* <User src = 'https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg'
                    // alt = 'user'
                    // name = 'SG'/> */}

// export default function Users() {
//     return(
//         <div className = 'right'>
//             <User src = 'https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg'
//                 alt = 'user'
//                 name = 'SG'/>
//             <div className = 'users__block'>
//                 <User src = 'https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg'
//                     alt = 'user'
//                     name = 'SG'
//                     min/>
//                 <User src = 'https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg'
//                     alt = 'user'
//                     name = 'SG'
//                     min/>
//                 <User src = 'https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg'
//                     alt = 'user'
//                     name = 'SG'
//                     min/>
//                 <User src = 'https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg'
//                     alt = 'user'
//                     name = 'SG'
//                     min/>
//             </div>
//         </div>
//     )
// }