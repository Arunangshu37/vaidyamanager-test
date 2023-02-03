import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { getPatientDetail } from '../actions/prescriptionActions';
import { Form, Button, Card } from 'react-bootstrap'

const PrescriptionData = () => {
  const dispatch = useDispatch();

  //Prescription API to fetch Prescription List
  const OldPrescriptions = useSelector((state) => state.getPatientPrescriptionList)
  const { loadingp, errorp, patientPrescriptionData } = OldPrescriptions;

  useEffect(() => {
    dispatch(getPatientDetail());
  }, [dispatch])

  console.log("Data is", patientPrescriptionData)
  return (
    <div style={{ marginTop: "4rem" }}>
      <Card>
        <Card.Body>
          <h6> </h6>
          <h6> </h6>
        </Card.Body>
      </Card>
      <table className="striped bordered visiting" bordercolor="#6caaa8">
        <thead>
          <tr>
            <th>
              No
            </th>
            <th>
              Patient Name
            </th>
            <th>
              Visit Date
            </th>
            <th>
              Symptoms
            </th>
            <th>
              Medicines
            </th>

            {/* <th>Remark</th> */}
            <th>
              Panchakrma
            </th>
          </tr>
        </thead>

        <tbody>
          {patientPrescriptionData?.map((v, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{patientPrescriptionData[0]?.Patient[0].name}</td>
                <td>{dayjs(v.createdAt).format('DD/MM/YYYY')}</td>
                {/* <td></td> */}


              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  )
}

export default PrescriptionData