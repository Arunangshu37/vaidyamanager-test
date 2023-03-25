import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux'
import '../demoreg.css'
import '../register.css'
import { register } from '../actions/userActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Image, Form, InputGroup, Row, Col } from 'react-bootstrap';


const Register = ({ location, history }) => {

  const RegisterData = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    date: new Date(),
    age: "",
    weight: "",
    gender: "",
    illness: "",
    treatment: "",
    duration: "",
    reference: "",
    profilePictureURL: "",
    isAdmin: false,
    validated: false
  }
  const [registrationForm, setRegistrationForm] = useState(RegisterData)

  const dispatch = useDispatch();
  // Get user login info from Redux state
  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const submitHandler = (e) => {
    e.preventDefault()

    // Check if passwords are the same
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {

      // Dispatch Register
      dispatch(register
        (registrationForm.name,
          registrationForm.email,
          registrationForm.phone,
          registrationForm.password,
          registrationForm.address,
          registrationForm.age,
          registrationForm.gender,
          registrationForm.weight,
          registrationForm.reference,
          registrationForm.date,
          // registrationForm.false,
          registrationForm.profilePictureURL
        ))

      // console.log("registr", registrationNo)
      toast.success('Registration Successfully!', {
        position: toast.POSITION.TOP_CENTER
      });
      localStorage.setItem('isLogin', true)
      setName('');
      setEmail('');
      setPhone('');
      setAge('');
      setGender('');
      setAddress('');
      setWeight('');
      setValidated(true);
      setPassword('');
      setConfirmPassword('');
      setIsChild('')
    }

  }

  return (
    <>
      <h1 style={{ marginLeft: "-69px" }}>Registration</h1>
      <Form onSubmit={submitHandler} className='registerform' >
        <Row>
          <Col md={6}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Full Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='Date'>
              <Form.Label>Date</Form.Label>
              <div className='date-input'>
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
          </Col>

        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='phone'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type='tel'
                placeholder='Phone Number'
                maxLength="10"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              // required
              />
            </Form.Group>
          </Col>
        </Row>


        <Row>
          <Col md={6}>
            <Form.Group controlId='Age'>
              <Form.Label>Age</Form.Label>
              <Form.Control
                type='text'
                placeholder='Age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='gender'>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as='select'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value=''>Choose...</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='Weight'>
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type='text'
                placeholder='Weight in Kg'
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='address'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                type='text'
                placeholder='Address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId='reference' >
              <Form.Label>Reference for vaidya manager?</Form.Label>
              <Form.Control
                as="select"
                type='text'
                placeholder='Reference for vaidya manager?'
                value={reference}
                onChange={(e) => setReference(e.target.value)}

              >
                <option value="">Reference</option>
                <option value="Newspaper">Newspaper</option>
                <option value="Internet">Internet</option>
                <option value="Call Center">Call Center</option>
                <option value="Friend/Relative">Friend/Relative</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="radios">
              <Form.Check
                value="design"
                type="radio"
                aria-label="radio 1"
                label="Design"
                name="InTh"
              // onChange={handleChange}
              // checked
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="radios">
              <Form.Check
                value="food"
                type="radio"
                aria-label="radio 2"
                label="Food"
                name="InTh"
                // onChange={handleChange}
                checked
              />
            </Form.Group>
          </Col>

        </Row>
        <Button type='submit' variant='primary'>
          Sign Up
        </Button>
        <ToastContainer />
      </Form>
    </>
  )
}

export default Register