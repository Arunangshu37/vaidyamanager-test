import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../demoreg.css'
import '../register.css'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { Container, Row, Card, Col, ListGroup, Button, Image, Form } from 'react-bootstrap';
import TabComponent from '../components/TabComponent.js';
import Nav from 'react-bootstrap/Nav';

const Therapy = ({ location, history }) => {
    const dispatch = useDispatch();
    const [therapyform, setTherapyform] = useState({
        name: "",
        contact: "",
        email: "",
        therapyname: "",
        therapyfees: "",
        patientreview: "",
        therapistName: "",
        reference: ""
    })

    const submitHandler = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;

        e.preventDefault()
        // Check if passwords are the same

    }
    return (
        <>
            <div className='container'>

            <div className='row' 
                style={{ marginTop: "5rem"}}>
                <div className='col-md-2'>
                    <TabComponent />
                 
                </div>
                <div className='col-md-8'>
                    {/* <FormContainer> */}
                        <h1 style={{ marginLeft: "44px" }}>Therapy Form</h1>
                        <Form onSubmit={submitHandler} className='registerform'>
                            <table>
                                <tr>
                                    <td>
                                        <label> Name</label>
                                    </td>
                                    <td>
                                        <Form.Group controlId='name' className='registerform-group'>
                                            <Form.Control
                                                type='text'
                                                placeholder='Full Name'
                                                value={therapyform.name}
                                                onChange={(e) => setTherapyform({ ...therapyform, name: e.target.value })}
                                            ></Form.Control>
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            Contact No.
                                        </label>
                                    </td>
                                    <td >
                                        <Form.Group controlId='contact' className='registerform-group'>
                                            <Form.Control
                                                type='text'
                                                placeholder='10 digit mobile number'
                                                value={therapyform.contact}
                                                onChange={(e) => setTherapyform({ ...therapyform, contact: e.target.value })}
                                            ></Form.Control>
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Email Id</label>
                                    </td>
                                    <td >
                                        <Form.Group controlId='email' className='registerform-group'>
                                            <Form.Control
                                                type='email'
                                                placeholder='email@example.com'
                                                value={therapyform.email}
                                                onChange={(e) => setTherapyform({ ...therapyform, email: e.target.value })}
                                            ></Form.Control>
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label> Therapy Name</label>
                                    </td>
                                    <td >
                                        <Form.Group controlId='Therapy Name' className='registerform-group'>
                                            <Form.Control
                                                type='text'
                                                placeholder=' Therapy Name'
                                                value={therapyform.therapyname}
                                                onChange={(e) => setTherapyform({ ...therapyform, therapyname: e.target.value })}

                                            ></Form.Control>
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label> Therapy Fees</label>
                                    </td>
                                    <td >
                                        <Form.Group controlId='Therapy Fees' className='registerform-group'>
                                            <Form.Control
                                                type='text'
                                                placeholder='Therapy Fees'
                                                value={therapyform.therapyfees}
                                                onChange={(e) => setTherapyform({ ...therapyform, therapyfees: e.target.value })}

                                            ></Form.Control>
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Patient Review
                                        </label>
                                    </td>
                                    <td >
                                        <Form.Group controlId="Patient Review" className='registerform-group'>

                                            <Form.Control as="textarea" rows={2}
                                                type='text'
                                                placeholder='Patient Review'
                                                value={therapyform.patientreview}
                                                onChange={(e) => setTherapyform({ ...therapyform, patientreview: e.target.value })}
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label> Therapist Name</label>
                                    </td>
                                    <td >
                                        <Form.Group controlId='Therapist' className='registerform-group'>
                                            <Form.Control
                                                type='text'
                                                placeholder='Therapist Name'
                                                value={therapyform.therapistName}
                                                onChange={(e) => setTherapyform({ ...therapyform, therapistName: e.target.value })}

                                            ></Form.Control>
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            Reference of Vaidya Manager?
                                        </label>
                                    </td>
                                    <td>
                                        <Form.Group controlId='reference' className='registerform-group'>
                                            <Form.Control
                                                as="select"
                                                type='text'
                                                placeholder='Reference for vaidya manager?'
                                                value={therapyform.reference}
                                                onChange={(e) => setTherapyform({ ...therapyform, reference: e.target.value })}

                                            >
                                                <option value="">Select</option>
                                                <option value="Newspaper">Newspaper</option>
                                                <option value="Internet">Internet</option>
                                                <option value="Call Center">Call Center</option>
                                                <option value="Friend/Relative">Friend/Relative</option>
                                                <option value="Other">Other</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                <td></td>
                                    <td>  <Button type='submit' variant='primary'>
                                        Save
                                    </Button>
                              
                                        <Button t variant='primary'>
                                            Reset
                                        </Button></td>
                                </tr>
                            </table>
                        </Form >
                    {/* </FormContainer> */}
                </div>
  
            </div>
            </div>
        </>
    )
}

export default Therapy