import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../demoreg.css'
import '../register.css'
import { Button, Form } from 'react-bootstrap';
import { createDoctorData } from '../actions/doctorActions'

const Doctors = () => {
    const DoctorData = {
        doctorname,
        speciality,
        licenseNumber,
        experience,
        email_id,
        phone_no,
        consultation_fee,
        profilePictureURL:imageFile
    }
    const [doctorForm, setDoctorForm] = useState(DoctorData);
    const [imageFile, setImageFile] = useState(null);

    const dispatch = useDispatch();

    // const addTherapy = useSelector((state) => state.createTherapy)
    // const { loading, error, success, therapyData } = addTherapy

    const resetHandler = (e) => {
        setTherapyform(defaultData)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log("thrapy", therapyform);
        dispatch(createDoctorData(
            doctorForm.doctorname,
            doctorForm.speciality,
            doctorForm.licenseNumber,
            doctorForm.experience,
            doctorForm.email_id,
            doctorForm.phone_no,
            doctorForm.consultation_fee,
            doctorForm.profilePictureURL,
            imageFile
        ))
        setDoctorForm(DoctorData)
    }

    return (
        <>
            <div className='col-md-8'>
                <h1 style={{ marginLeft: "44px" }}>Doctor Form</h1>
                <Form onSubmit={submitHandler} className='registerform'>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label> Doctor Name</label>
                                </td>
                                <td>
                                    <Form.Group controlId='doctorname'>
                                        <Form.Control
                                            type='text'
                                            placeholder='Doctor Name'
                                            value={doctorForm.doctorname}
                                            onChange={(e) => setDoctorForm({ ...doctorForm, doctorname: e.target.value })}
                                        ></Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        Speciality
                                    </label>
                                </td>
                                <td >
                                    <Form.Group controlId='speciality'>
                                        <Form.Control
                                            type='text'
                                            placeholder=''
                                            value={doctorForm.speciality}
                                            onChange={(e) => setDoctorForm({ ...doctorForm, speciality: e.target.value })}
                                        ></Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>LicenseNumber</label>
                                </td>
                                <td >
                                    <Form.Group controlId='licenseNumber'>
                                        <Form.Control
                                            type='text'
                                            placeholder='DR0001'
                                            value={doctorForm.licenseNumber}
                                            onChange={(e) => setDoctorForm({ ...doctorForm, licenseNumber: e.target.value })}
                                        ></Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label> Experience</label>
                                </td>
                                <td >
                                    <Form.Group controlId='experience'>
                                        <Form.Control
                                            type='text'
                                            placeholder='years'
                                            value={doctorForm.experience}
                                            onChange={(e) => setDoctorForm({ ...doctorForm, experience: e.target.value })}>
                                        </Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label> Email Id</label>
                                </td>
                                <td >
                                    <Form.Group controlId='emailid'>
                                        <Form.Control
                                            type='email'
                                            placeholder='xyz@gmail.com'
                                            value={doctorForm.email_id}
                                            onChange={(e) => setDoctorForm({ ...doctorForm, email_id: e.target.value })}
                                        ></Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Phone No</label>
                                </td>
                                <td >
                                    <Form.Group controlId='phone_no'>
                                        <Form.Control
                                            type='text'
                                            maxLength={10}
                                            placeholder='Number'
                                            value={doctorForm.phone_no}
                                            onChange={(e) => setDoctorForm({ ...doctorForm, phone_no: e.target.value })}>
                                        </Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        Consultation Fee
                                    </label>
                                </td>
                                <td>
                                    <Form.Group controlId='consultation_fee'>
                                        <Form.Control
                                            type='number'
                                            placeholder='00'
                                            value={doctorForm.consultation_fee}
                                            onChange={(e) => setDoctorForm({ ...doctorForm, consultation_fee: e.target.value })}>
                                        </Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <label>
                                    Profile Picture
                                </label>
                                <td>
                                    <Form.Group controlId='profilePicture'>
                                        <Form.Control
                                            type='file'
                                            accept='image/*'
                                            onChange={(e) => setImageFile(e.target.files[0])}
                                        />
                                    </Form.Group>
                                </td>
                                <td>
                                    <Button type='submit' variant='primary'>
                                        Save
                                    </Button>
                                    <Button style={{ marginLeft: "5px" }} onClick={resetHandler} variant='primary'>
                                        Reset
                                    </Button></td>
                            </tr>
                        </tbody>
                    </table>
                </Form >
            </div>
        </>
    )
}

export default Doctors;