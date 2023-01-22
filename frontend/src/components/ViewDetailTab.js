import React, { useState, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPatientDetail } from '../actions/prescriptionActions';
import * as _ from 'lodash'

const ViewDetailTab = () => {
  const dispatch = useDispatch();
  //Prescription API to fetch Prescription List
 

  // const newPatientData = prescriptionData?.filter((patientuser) => patientuser.prescriptionUser === users[0]._id);
  // console.log("newPatientData", newPatientData);

  // useEffect(() => {
  //   dispatch(getPrescriptionDetail());
  // }, [dispatch])

  const OldPrescriptions = useSelector((state) => state.getPatientPrescriptionList)
  const { loadingp, errorp, patientPrescriptionData } = OldPrescriptions;


  const PrescriptionVisitData = _.orderBy(patientPrescriptionData, [item => item.lastModified], ['desc']);



  return (
    <div style={{ marginTop: "3rem" }}>

      <div className="card">
        <div className="card-body">
          <div className="col">

            <h5></h5>
          </div>
        </div>
      </div>



     

      <table className="table table-borderless" bordercolor="black" style={{ backgroundColor: "aliceblue" }}>
       
            <tr>
              <td>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Ayurveda</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    
                    </Card.Text>

                  </Card.Body>
                </Card>
              </td>
              <td>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Diet Chart</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card>
              </td>

            </tr>

            <tr>
              <td>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Symptoms</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                   
                    </Card.Text>

                  </Card.Body>
                </Card>
              </td>

              <td>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Medicines</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                      
                    </Card.Text>

                  </Card.Body>
                </Card>
              </td>
            </tr>
         
      </table>




    </div>
  )
}

export default ViewDetailTab