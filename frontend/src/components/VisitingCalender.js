import React, { useState, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../visitingcalender.css'
import { useLocation } from 'react-router-dom'
import * as _ from 'lodash'
import { getPatientDetail } from '../actions/prescriptionActions';

const VisitingCalender = ({ patientId }) => {
  const dispatch = useDispatch();
  // const { patientId, visitHistory } = props;
  // const { patientId = '', visitHistory = [] } = props;
  console.log("patientId", patientId)

  const OldPrescriptions = useSelector((state) => state.getPatientPrescriptionList)
  const { loadingp, errorp, patientPrescriptionData } = OldPrescriptions;

  const PrescriptionVisitData = _.orderBy(patientPrescriptionData, [item => item.lastModified], ['desc']);
  // console.log("PrescriptionVisitData", PrescriptionVisitData);

  // filter visits based on patientId
  // const filteredVisits = visitHistory.filter(visit => visit.patientId === patientId);
  // console.log("visitcalender", filteredVisits)

  useEffect(() => {
    dispatch(getPatientDetail());
  }, [dispatch])

  // const [filteredVisits, setFilteredVisits] = useState([]);
  // useEffect(() => {
  //   if (patientId) {
  //     const filteredData = visitHistory.filter(visit => visit.patientId === patientId);
  //     setFilteredVisits(filteredData);
  //   }
  // }, [patientId, visitHistory]);

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