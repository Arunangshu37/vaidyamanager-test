import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../demoreg.css'
import '../register.css'
import { Button, Form } from 'react-bootstrap';


const Medicine = ()=> {
    const defaultData = {
        medicineName: "",
        Qty: "",
        Unit: "",
        Gram: "",
        supplierName: "",
        contactNo: "",
        amount: "",
        medicine_reciver_name: ""
    }

    const [medicineform, setMedicineform] = useState(defaultData);
    const dispatch = useDispatch();

//redux state for the medicines


    const submitHandler = (e) => {
        e.preventDefault()
        // console.log("thrapy", medicineform);
        // dispatch((
        //     medicineform.medicineName,
        //     medicineform.Qty,
        //     medicineform.Unit,
        //     medicineform.Gram,
        //     medicineform.supplierName,
        //     medicineform.contactNo,
        //     medicineform.amount,
        //     medicineform.medicine_reciver_name))
        setMedicineform(defaultData)
    }


    const resetHandler = (e) => {
        setMedicineform(defaultData)
    }

  return (
   
    <div className='col-md-8'>
    <h1 style={{ marginLeft: "44px" }}>Medicine Form</h1>
    <Form onSubmit={submitHandler} className='registerform'>
        <table>
            <tbody>
                <tr>
                    <td>
                        <label> Medicine Name</label>
                    </td>
                    <td>
                        <Form.Group controlId='medicinename' >
                            <Form.Control
                                type='text'
                                placeholder='Medicine Name'
                                value={medicineform.medicineName}
                                onChange={(e) => setMedicineform({ ...medicineform, medicineName: e.target.value })}
                            ></Form.Control>
                        </Form.Group>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                           Qty
                        </label>
                    </td>
                    <td >
                        <Form.Group controlId='Qty'>
                            <Form.Control
                                type='text' 
                                placeholder='Qty'   
                                value={medicineform.Qty}
                                onChange={(e) => setMedicineform({ ...medicineform, Qty: e.target.value })}
                            ></Form.Control>
                        </Form.Group>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Unit</label>
                    </td>
                    <td >
                        <Form.Group controlId='unit'>
                            <Form.Control
                                type='text'
                                placeholder='Unit'
                                value={medicineform.Unit}
                                onChange={(e) => setMedicineform({ ...medicineform, Unit: e.target.value })}
                            ></Form.Control>
                        </Form.Group>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Gram</label>
                    </td>
                    <td >
                        <Form.Group controlId='gram' >
                            <Form.Control
                                type='text'
                                placeholder='Gram'
                                value={medicineform.Gram}
                                onChange={(e) => setMedicineform({ ...medicineform, Gram: e.target.value })}

                            ></Form.Control>
                        </Form.Group>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Supplier Name</label>
                    </td>
                    <td >
                        <Form.Group controlId='supplierName'>
                            <Form.Control
                                type='text'
                                placeholder='Supplier Name'
                                value={medicineform.supplierName}
                                onChange={(e) => setMedicineform({ ...medicineform, supplierName: e.target.value })}

                            ></Form.Control>
                        </Form.Group>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Contact No
                        </label>
                    </td>
                    <td >
                        <Form.Group controlId="contactNo">
                        <Form.Control
                                type='text'
                                placeholder='Contact No'
                                maxLength={10}
                                value={medicineform.contactNo}
                                onChange={(e) => setMedicineform({ ...medicineform, contactNo: e.target.value })}

                            ></Form.Control>
                          
                        </Form.Group>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Amount</label>
                    </td>
                    <td >
                        <Form.Group controlId='amount'>
                            <Form.Control
                                type='text'
                                placeholder='0.00'
                                value={medicineform.amount}
                                onChange={(e) => setMedicineform({ ...medicineform, amount: e.target.value })}

                            ></Form.Control>
                        </Form.Group>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                        Medicine Receiver Name
                        </label>
                    </td>
                    <td>
                        <Form.Group controlId='reciever name' >
                        <Form.Control
                                type='text'
                                placeholder='Receiver name'
                                value={medicineform.medicine_reciver_name}
                                onChange={(e) => setMedicineform({ ...medicineform, medicine_reciver_name: e.target.value })}

                            ></Form.Control>
                        </Form.Group>
                    </td>
                </tr>
                <tr>
                    <td></td>
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

  )
}

export default Medicine