import React, { useState, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../visitingcalender.css'
import { useLocation } from 'react-router-dom'
import * as _ from 'lodash'
import { getPatientDetail } from '../actions/prescriptionActions';

const VisitingCalender = ({ visits }) => {
  const dispatch = useDispatch();

  const OldPrescriptions = useSelector((state) => state.getPatientPrescriptionList)
  const { loadingp, errorp, patientPrescriptionData } = OldPrescriptions;

  const PrescriptionVisitData = _.orderBy(patientPrescriptionData, [item => item.lastModified], ['desc']);
  console.log("PrescriptionVisitData", PrescriptionVisitData);


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

        </tbody>


        {/* {visits?.map((v, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{v.visitDate}</td>
                <td>{v.medicinePrescribed}</td>
                <td>{v.symptomObserved}</td>
              </tr>
            );
          })} */}




      </table>
    </div>
  )
}

export default VisitingCalender