import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux'
import '../demoreg.css'
import '../register.css'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { register } from '../actions/userActions'

import { Container, Row, Card, Col, ListGroup, Button, Image, Form } from 'react-bootstrap';





const Register = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [address, setAddress] = useState();
    const [weight, setWeight] = useState();
    const [illness, setIllness] = useState();
    const [treatment, setTreatment] = useState();
    const [duration, setDuration] = useState();
    const [reference, setReference] = useState();
    // const [dob, setDob] = useState();
    const [date, setDate] = useState(new Date());


    const dispatch = useDispatch();
   


    // Get user login info from Redux state
    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    // const redirect = location.search ? location.search.split('=')[1] : '/'

    //calculate the age
    // const getAge = (dob) => {
    //     // console.log("do", dob)
    //     var today = dayjs();
    //     var birthdate = dayjs(dob)
    //     var patitentAge = today.diff(birthdate, 'year')
    //     // console.log("patient age is", patitentAge)
    //     setAge(parseInt (patitentAge))
    // }
    // useEffect(() => {
    //     getAge(dob)
    // }, [dob])

    // useEffect(() => {
    //     // If there is user info then redirect
    //     if (userInfo) {
    //         history.push(redirect)
    //     }
    // }, [history, userInfo, redirect])

    // // Handler that logs in the user
    const submitHandler = (e) => {
        e.preventDefault()
        // Check if passwords are the same
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {

            // Dispatch Register
            dispatch(register(name, email, phone, password, address, age, gender, weight, illness, treatment, duration, reference, date, false))
            localStorage.setItem('isLogin', true)
        }
    }

    return (
        <>
     
                {/* <FormContainer>  */}
                    <h1 style={{ marginLeft: " 127px",fontSize: "22px" }}>Sign Up</h1>
                    {/* {error && <Message variant='danger'>{error}</Message>}
                    {message && <Message variant='danger'>{message}</Message>}
                    {loading && <Loader />} */}

                    <Form onSubmit={submitHandler} className='registerform'>
                        <table>
                            <tr>
                                <td>
                                    <label> Name</label>
                                </td>
                                <td colSpan={5}>
                                    <Form.Group controlId='name' className='registerform-group'>
                                        <Form.Control
                                            type='text'
                                            placeholder='Full Name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Date</label>
                                </td>
                                <td colSpan={5}>
                                    <Form.Group controlId='Date' className='registerform-group'>
                                        <div >
                                            <DatePicker
                                                selected={date}
                                                onChange={(date) => setDate(date)}
                                                peekNextMonth
                                                showMonthDropdown
                                                dropdownMode="select"
                                                placeholderText="Date"
                                                dateFormat="MMMM d, yyyy h:mm aa"
                                            />
                                        </div>
                                    </Form.Group>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>Age</label>
                                </td>
                                <td>
                                    <Form.Group controlId='Age' className='registerform-group'>
                                        <Form.Control
                                            type='text'
                                            placeholder='Age'
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}

                                        ></Form.Control>
                                    </Form.Group>
                                </td>


                                <td>
                                    <label>
                                        Gender
                                    </label>
                                </td>
                                <td>
                                    <Form.Group controlId='Gender' className='registerform-group'>
                                        <Form.Control as="select"
                                            value={gender}
                                            type='text'
                                            placeholder='Gender'
                                            onChange={(e) => setGender(e.target.value)}
                                        >
                                            <option value="">Sex</option>
                                            <option value="FEMALE">FEMALE</option>
                                            <option value="MALE">MALE</option>
                                        </Form.Control>
                                    </Form.Group>
                                </td>

                                <td>
                                    <label>Weight</label>
                                </td>
                                <td>
                                    <Form.Group controlId='Weight' className='registerform-group'>
                                        <Form.Control
                                            type='text'
                                            placeholder='Weight in Kg'
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}

                                        ></Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Address
                                    </label>
                                </td>
                                <td colSpan={5}>
                                    <Form.Group controlId="address" className='registerform-group'>

                                        <Form.Control as="textarea" rows={2}
                                            type='text'
                                            placeholder='Address'
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
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
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
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
                                    <Form.Group controlId='phone' className='registerform-group'>
                                        <Form.Control
                                            type="phone"
                                            maxLength="10"
                                            placeholder='10 digit mobile number'
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label> Present Illness</label>
                                </td>
                                <td colSpan={5}>
                                    <Form.Group controlId='Illness' className='registerform-group'>
                                        <Form.Control
                                            type='text'
                                            placeholder='About Illness'
                                            value={illness}
                                            onChange={(e) => setIllness(e.target.value)}

                                        ></Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Previous Taken treatment</label>
                                </td>
                                <td colSpan={5}>
                                    <Form.Group controlId='Treatment' className='registerform-group'>
                                        <Form.Control as="select"
                                            type='text'
                                            placeholder='Gender'
                                            value={treatment}
                                            onChange={(e) => setTreatment(e.target.value)}
                                        >
                                            <option value="">Select</option>
                                            <option value="Allopathy">Allopathy</option>
                                            <option value="Ayurved">Ayurved</option>
                                            <option value="Homeopathy">Homeopathy</option>
                                            <option value="Other">Other</option>
                                        </Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Duration</label>
                                </td>
                                <td colSpan={5}>
                                    <Form.Group controlId='Duration' className='registerform-group'>
                                        <Form.Control
                                            type='text'
                                            placeholder='Duration in Month'
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}

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
                                <td colSpan={5}>
                                    <Form.Group controlId='reference' className='registerform-group'>
                                        <Form.Control
                                            as="select"
                                            type='text'
                                            placeholder='Reference for vaidya manager?'
                                            value={reference}
                                            onChange={(e) => setReference(e.target.value)}

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
                                <td>
                                    <label>Password</label>
                                </td>
                                <td colSpan={5}>
                                    <Form.Group controlId='password' className='registerform-group'>
                                        <Form.Control
                                            type='password'
                                            placeholder='Enter password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label>Confirm Password</label>
                                </td>
                                <td colSpan={5}>
                                    <Form.Group controlId='confirmPassword' className='registerform-group'>
                                        <Form.Control
                                            type='password'
                                            placeholder='Confirm password'
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>  <Button type='submit' variant='primary'>
                                    Register
                                </Button></td>
                                <td>
                                    <Button t variant='primary'>
                                        Reset
                                    </Button></td>
                            </tr>

                        </table>
                    </Form >
                    {/* <Row className='py-3'>
                        <Col style={{ color: "black" }}>
                            Have an Account?{' '}

                            <Link style={{ backgroundColor: "white" }}
                                to={redirect ? `/login?redirect=${redirect}` : '/login'}
                            >
                                Login
                            </Link>
                        </Col>
                    </Row> */}
                 {/* </FormContainer>  */}
        </>
    )
}

export default Register