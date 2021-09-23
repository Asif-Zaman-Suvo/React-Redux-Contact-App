import React from 'react';
import { Link,useParams } from 'react-router-dom';

const EditContact = () => {

    const {id}=useParams()

    return (
        <div className='container-fluid'>
            <h1 className='text-dark display-3 py-3 text-center'>Edit Student {id}</h1>
            <div className='row'>
                <div className='col-md-6 p-5 mx-auto shadow'>
                    <form>
                        <div className='form-group pb-3'>
                            <input type='text' placeholder='Name' className='form-control' />
                        </div>
                        <div className='form-group pb-3'>
                            <input type='email' placeholder='Email Address' className='form-control' />
                        </div>
                        <div className='form-group pb-3'>
                            <input type='tel' placeholder='Phone Number' className='form-control' />
                        </div>
                        <div className='form-group pb-3'>
                            <input type='submit' value='Update Student' className='btn btn-dark' />
                            <Link style={{ marginLeft:"5px"}}className='btn btn-danger' to='/edit'>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default EditContact;