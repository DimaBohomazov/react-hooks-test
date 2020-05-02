import React from 'react';
import {Link} from'react-router-dom'

export const Card = ({user}) => {
    console.log("user.login",user)
    return (
        <div className='card'>
            <div className="card-body">
                <img className='card-img-top' src={user.avatar_url} alt={user.login}/>
                <h5 className="card-title">
                    { user.login}
                </h5>
                <Link className='btn btn-primary' to={'/profile/' + user.login}>
                    Open
                </Link>
            </div>

        </div>
    );
}