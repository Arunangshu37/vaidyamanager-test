import React, { useState, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import * as _ from 'lodash'
import dayjs from 'dayjs'
import { getPatientDetail } from '../actions/prescriptionActions';
import { useDispatch, useSelector } from 'react-redux'

const BillHistoryTab = ({ PatientId }) => {
    const dispatch = useDispatch();


    const OldPrescriptions = useSelector((state) => state.getPatientPrescriptionList)
    const { loadingp, errorp, patientPrescriptionData } = OldPrescriptions;

    const PrescriptionVisitData = _.orderBy(patientPrescriptionData, [item => item.lastModified], ['desc']);
    console.log("PrescriptionVisitData", PrescriptionVisitData);

    const filterbill = PrescriptionVisitData?.filter(visit => visit.prescriptionUser === PatientId);
    // console.log("visitcalender", filterbill)

    return (
        <div>
            <Card>
                <Card.Body>Patient Name:{filterbill[0]?.Patient[0].name}</Card.Body>
            </Card>
            <table className="striped bordered visiting" bordercolor="#1d4e4a">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Visit Date</th>
                        <th>Consulting</th>
                        <th>Medicine</th>
                        <th>Total</th>
                        <th>Paid</th>
                    </tr>
                </thead>
                <tbody>

                    {filterbill?.map((v, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{dayjs(v.createdAt).format('DD/MM/YYYY')}</td>
                                <td>{v.payment?.Consulting}</td>
                                <td>{v.payment?.medicine}</td>
                                <td>{v.payment?.Debit_Credit}</td>
                                <td>{v.payment?.paid}</td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Paid</td>
                        <td>Paid</td>


                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default BillHistoryTab