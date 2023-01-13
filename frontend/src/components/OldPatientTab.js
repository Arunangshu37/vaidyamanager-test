import React, { useState, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPrescriptionDetail } from '../actions/prescriptionActions'

const OldPatientTab = () => {
    const dispatch = useDispatch();

    const prescription = useSelector((state) => state.getPrescripionList)
    const { loading, error, prescriptionData } = prescription;
    console.log("Prescription is", prescriptionData);


    useEffect(() => {
        dispatch(getPrescriptionDetail());

    }, [dispatch])

    const ptName = prescriptionData?.filter(x => x.id === x.prescriptionUser);
    console.log("first")
    return (
        <div>

            {/* table Starts */}
            <table className="table table-borderless" bordercolor="black">
                <tr>
                    <td style={{ borderRight: "1px solid " }}>
                        Search  Patient here
                    </td>
                    <td style={{ borderRight: "1px solid " }}>

                        Ayurveda Diagnosis
                    </td>
                    <td style={{ borderRight: "1px solid " }}>
                        Modern Diagnosis
                    </td>
                    <td style={{ borderRight: "1px solid " }}>
                        Contact
                    </td>
                    <td style={{ borderRight: "1px solid " }}>
                        Status
                    </td>
                    <td style={{ borderRight: "1px solid " }}>
                        Full Detail
                    </td>

                </tr>
                <tr>
                    {prescriptionData?.map((option) => (
                        <td>



                            <>       <td>  {option.ayurveda_diagnosis}</td>
                                <td>{option.modernSystem}</td>
                                <td>View</td>
                                <td>Status</td>

                            </>

                        </td>
                    ))}
                </tr>
            </table>
            {/* table End */}

        </div>
    )
}

export default OldPatientTab