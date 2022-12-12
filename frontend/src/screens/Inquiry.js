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

const Inquiry = () => {
    const dispatch = useDispatch();
    const [inquiryForm, setInquiryForm] = useState({
        name: "",
        contact: "",
        email: "",
        inquirySubject: "",
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
                        <h1 style={{ marginLeft: "44px" }}>Inquiry</h1>
                        <Form onSubmit={submitHandler} className='registerform w-100'>
                            <table style={{width: "100%"}}>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <label> Name</label>
                                    </td>
                                    <td colSpan={5}>
                                        <Form.Group controlId='name' className='registerform-group'>
                                            <Form.Control
                                                type='text'
                                                placeholder='Full Name'
                                                value={inquiryForm.name}
                                                onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
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
                                    <td colSpan={5}>
                                        <Form.Group controlId='contact' className='registerform-group'>
                                            <Form.Control
                                                type='text'
                                                placeholder='10 digit mobile number'
                                                value={inquiryForm.contact}
                                                onChange={(e) => setInquiryForm({ ...inquiryForm, contact: e.target.value })}
                                            ></Form.Control>
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Email Id</label>
                                    </td>
                                    <td colSpan={5}>
                                        <Form.Group controlId='email' className='registerform-group'>
                                            <Form.Control
                                                type='email'
                                                placeholder='email@example.com'
                                                value={inquiryForm.email}
                                                onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                                            ></Form.Control>
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>For What?
                                        </label>
                                    </td>
                                    <td colSpan={5}>
                                        <Form.Group controlId="Inquiry" className='registerform-group'>

                                            <Form.Control as="textarea" rows={2}
                                                type='text'
                                                placeholder='Inquiry Subject'
                                                value={inquiryForm.inquirySubject}
                                                onChange={(e) => setInquiryForm({ ...inquiryForm, inquirySubject: e.target.value })}
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            Reference of Vaidya Manager?
                                        </label>
                                    </td>
                                    <td colSpan={5}>
                                        <Form.Group controlId='reference' className='registerform-group'>
                                            <Form.Control
                                                as="select"
                                                type='text'
                                                placeholder='Reference for vaidya manager?'
                                                value={inquiryForm.reference}
                                                onChange={(e) => setInquiryForm({ ...inquiryForm, reference: e.target.value })}

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
                                    <td colSpan={5}>  <Button type='submit' variant='primary'>
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

export default Inquiry