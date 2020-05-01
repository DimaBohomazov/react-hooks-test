import React from 'react';
import {Link} from'react-router-dom'

export const Card = (props) => {
    return (
        <div className='card'>
            <div className="card-body">
                <img className='card-img-top' src={""} alt={""}/>
                <h5 className="card-title">
                    React JS
                </h5>
                <Link className='btn btn-primary' to={'/profile/'}>
                    Open
                </Link>
            </div>

        </div>
    );
}

