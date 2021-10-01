import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const EditContact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    const { id } = useParams();
    const contacts = useSelector((state => state))
    const dispatch=useDispatch();
    const history=useHistory();
    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect(() => {

        if (currentContact) {
            setName(currentContact.name)
            setEmail(currentContact.email)
            setNumber(currentContact.number)
        }

    }, [currentContact])

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
            id: currentContact.id,
            name,
            email,
            number
        };

        dispatch({ type: "UPDATE_CONTACT", payload: data })
        toast.success("Contact Updated Successfully");
        history.push("/")
    };

    

        return (
            <div className='container'>

                {
                    currentContact ? (

                        <>
                            <h1 className='text-dark display-3 py-3 text-center'>Edit Student {id}</h1>
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
                                            <input type='tel' placeholder='Phone Number' className='form-control' value={number} onChange={e => setNumber(e.target.value)} />
                                        </div>
                                        <div className='form-group pb-3'>
                                            <input type='submit' value='Update Student' className='btn btn-dark' />
                                            <Link style={{ marginLeft: "5px" }} className='btn btn-danger' to='/edit'>Cancel</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </>
                    ) : (
                        <h1 className='text-dark display-3 py-3 text-center'>Student id with {id} is not exist</h1>
                    )
                }


            </div>
        );
    };


export default EditContact;