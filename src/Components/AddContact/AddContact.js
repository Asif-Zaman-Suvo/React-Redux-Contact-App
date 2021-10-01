import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

const AddContact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")


    const contacts = useSelector((state) => state);
    // console.log(contacts);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email ? contact : null);
        const checkName = contacts.find(contact => contact.name === name ? contact : null);
        const checkNumber = contacts.find(contact => contact.number === parseInt(number) ? contact : null);


        if (!email || !number || !name) {
            return toast.warning("Please fill in all fields");
        }

        if (checkEmail) {
            return toast.error("This email is already exists")
        }

        if (checkName) {
            return toast.error("This name is already exists")
        }

        if (checkNumber) {
            return toast.error("This number is already exists")
        }


        const data = {
            id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
            name,
            email,
            number
        };

        dispatch({ type: "ADD_CONTACT", payload: data })
        toast.success("Student Added Successfully");
        history.push("/")
    };

    return (
        <div className='container-fluid'>
            <h1 className='text-dark display-3 py-3 text-center'>
                Add Contact
            </h1>
            <div className='row'>
                <div className='col-md-6 p-5 mx-auto shadow'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group pb-3'>
                            <input type='text' placeholder='Name' className='form-control' value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className='form-group pb-3'>
                            <input type='email' placeholder='Email Address' className='form-control' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='form-group pb-3'>
                            <input type='number' placeholder='Phone Number' className='form-control' value={number} onChange={e => setNumber(e.target.value)} />
                        </div>
                        <div className='form-group pb-3'>
                            <input type='submit' value='Add Student' className='btn btn-block btn-dark form-control' />
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );

};

export default AddContact;