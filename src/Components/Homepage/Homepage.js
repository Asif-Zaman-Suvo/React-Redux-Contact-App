import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 my-5 text-end'>
                    <Link to='/add' className='btn btn-outline-success'>Add Contact</Link>
                </div>

                <div className='col-md-6 mx-auto'>
                    <h1>Welcome to React Redux Contact Book</h1>
                </div>
            </div>

        </div>
    );
};

export default Homepage;