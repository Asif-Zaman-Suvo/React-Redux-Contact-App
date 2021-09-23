import React from 'react';
import { Link } from 'react-router-dom';

const AddContact = () => {
    return (
        <div className='container-fluid'>
               <h1 className='text-dark display-3 py-3 text-center'>
                    Add Contact
                </h1>
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
                            <input type='submit' value='Add Student' className='btn btn-block btn-dark form-control'/>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );

};

export default AddContact;