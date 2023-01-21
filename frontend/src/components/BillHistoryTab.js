import React, { useState, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import * as _ from 'lodash'
import { getPatientDetail } from '../actions/prescriptionActions';
import { useDispatch, useSelector } from 'react-redux'

const BillHistoryTab = ({ PatientId }) => {
    const dispatch = useDispatch();


    const OldPrescriptions = useSelector((state) => state.getPatientPrescriptionList)
    const { loadingp, errorp, patientPrescriptionData } = OldPrescriptions;

    const PrescriptionVisitData = _.orderBy(patientPrescriptionData, [item => item.lastModified], ['desc']);
    console.log("PrescriptionVisitData", PrescriptionVisitData);

    const filterbill =  PrescriptionVisitData?.filter(visit => visit.prescriptionUser === PatientId);
    console.log("visitcalender",filterbill )

    return (
        <div>BillHistoryTab
            <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
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
                    <tr>
                        {filterbill?.map((v, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{v.createdAt}</td>
                                    <td>{v.payment?.Consulting}</td>
                                    <td>{console.log(v.payment?.Consulting)}</td>
                                
                                </tr>
                            );
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BillHistoryTab