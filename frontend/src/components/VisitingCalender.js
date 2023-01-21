import React, { useState, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../visitingcalender.css'
import * as _ from 'lodash'
import { getPatientDetail } from '../actions/prescriptionActions';
import BillHistoryTab from './BillHistoryTab'
import dayjs from 'dayjs'


const VisitingCalender = ({ patientId }) => {
  const dispatch = useDispatch();
  // const { patientId, visitHistory } = props;
  // const { patientId = '', visitHistory = [] } = props;
  // console.log("visit", patientId)

  const OldPrescriptions = useSelector((state) => state.getPatientPrescriptionList)
  const { loadingp, errorp, patientPrescriptionData } = OldPrescriptions;

  const PrescriptionVisitData = _.orderBy(patientPrescriptionData, [item => item.lastModified], ['desc']);

  // filter visits based on patientId
  const filteredVisits = PrescriptionVisitData?.filter(visit => visit.prescriptionUser === patientId);
  // console.log("visitcalender", filteredVisits)

  useEffect(() => {
    dispatch(getPatientDetail());
  }, [dispatch])

 
  return (
    <div>
      VisitingCalender

      <Card>
        <Card.Body>

        </Card.Body>
      </Card>
      <table className="striped bordered visiting" bordercolor="black">
        <thead>
          <tr>
            <th>No</th>
            <th>Visit Date</th>
            <th>Next Visit</th>
            <th>Days</th>
            <th>Days</th>
            <th>Remark</th>
          </tr>
        </thead>

        <tbody>
        {filteredVisits?.map((v, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{dayjs(v.createdAt).format('DD/MM/YYYY')}</td>
                {/* <td>{v.}</td>
                <td>{v.}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ display: "none" }}>
      <BillHistoryTab PatientId = {patientId} />
      </div>
    </div>
  )
}

export default VisitingCalender