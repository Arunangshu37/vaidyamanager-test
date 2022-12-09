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
import { register } from '../actions/userActions'
import dayjs from 'dayjs'
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@material-ui/core/styles";
import FormContainer from '../components/FormContainer'
import { Container, Row, Card, Col, ListGroup, Button, Image, Form } from 'react-bootstrap';


const useStyles = makeStyles(theme => ({
    formControl: {
        //   margin: theme.spacing(1),
        width: "13vw"
    },
    // selectEmpty: {
    //     marginTop: theme.spacing(1)
    // },
    select: {
        height: "6vh"
    },
    inputLabel: {
        fontSize: "16px",
        alignSelf: "center"
    }
}));

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
    const [date, setDate] = useState();
    const dispatch = useDispatch();
    const classes = useStyles();


    // Get user login info from Redux state
    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

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

    useEffect(() => {
        // If there is user info then redirect
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    // Handler that logs in the user
    const submitHandler = (e) => {

        e.preventDefault()
        // Check if passwords are the same
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {

            // Dispatch Register
            dispatch(register(name, email, phone, password,address, age, gender, false))
            localStorage.setItem('isLogin', true)
        }
    }


    return (
        <>
            <div className="wrapper">
                <div className='formContent'>
                    <FormContainer>
                        <h1 style={{ marginLeft: "-71px" }}>Sign Up</h1>
                        {error && <Message variant='danger'>{error}</Message>}
                        {message && <Message variant='danger'>{message}</Message>}
                        {loading && <Loader />}
                        <Form onSubmit={submitHandler} className='registerform'>
                            <Form.Group controlId='name' className='registerform-group'>
                                <Form.Control
                                    type='text'
                                    placeholder='Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='Date' className='registerform-group'>
                                <div >
                                    <DatePicker
                                        selected={date}
                                        onChange={(date) => setDate(date)}
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        placeholderText="Date"
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group controlId='Age' className='registerform-group'>
                                <Form.Control
                                    type='text'
                                    placeholder='Age'
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}

                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='Gender' className='registerform-group'>
                                <Form.Control as="select"
                                    value={gender}
                                    type='text'
                                    placeholder='Gender'
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option value="FEMALE">FEMALE</option>
                                    <option value="MALE">MALE</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId='Weight' className='registerform-group'>
                                <Form.Control
                                    type='text'
                                    placeholder='Weight in Kg'
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}

                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='Illness' className='registerform-group'>
                                <Form.Control
                                    type='text'
                                    placeholder='Patient Illness'
                                    value={illness}
                                    onChange={(e) => setIllness(e.target.value)}

                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='Duration' className='registerform-group'>
                                <Form.Control
                                    type='text'
                                    placeholder='Duration'
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}

                                ></Form.Control>
                            </Form.Group>
                            
                            <Form.Group  controlId="address" className='registerform-group'>

                                <Form.Control as="textarea" rows={2} 
                                   type='text'
                                   placeholder='Address'
                                   value={address}
                                   onChange={(e) => setAddress(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId='email' className='registerform-group'>
                                <Form.Control
                                    type='email'
                                    placeholder='email@example.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='phone' className='registerform-group'>
                                <Form.Control
                                    type='phone'
                                    placeholder='10 digit mobile number'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='reference' className='registerform-group'>
                                <Form.Control
                                as="select"
                                    type='text'
                                    placeholder='Reference for vaidya manager?'
                                    value={reference}
                                    onChange={(e) => setReference(e.target.value)}

                                >
                                      <option value="">Select</option>
                                    <option value="FEMALE">Newspaper</option>
                                    <option value="MALE">Internet</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId='password' className='registerform-group'>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='confirmPassword' className='registerform-group'>
                                <Form.Control
                                    type='password'
                                    placeholder='Confirm password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Button type='submit' variant='primary'>
                                Register
                            </Button>
                        </Form >
                        <Row className='py-3'>
                            <Col style={{ color: "black" }}>
                                Have an Account?{' '}

                                <Link style={{ backgroundColor: "white" }}
                                    to={redirect ? `/login?redirect=${redirect}` : '/login'}
                                >
                                    Login
                                </Link>
                            </Col>
                        </Row>
                    </FormContainer>
                </div>
            </div>
        </>
    )
}

export default Register