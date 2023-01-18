
import React, { useState, useEffect, useContext } from 'react'
import { getPatientDetail } from '../actions/prescriptionActions';
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import * as _ from 'lodash'
import CardGroup from 'react-bootstrap/CardGroup';
import { Col, Button, Row, Card,ListGroup } from 'react-bootstrap'
import '../oldPrescription.css'



const OldPrescriptions = () => {
  const dispatch = useDispatch();

  const [expanded, setExpanded] = React.useState(false);
  const [result, setResult] = useState([]);
  const [prevTableId, setPrevTableId] = useState("");
  const [selectedVisit, setSelectedVisit] = useState(null);

  const OldPrescriptions = useSelector((state) => state.getPatientPrescriptionList)
  const { loadingp, errorp, patientPrescriptionData } = OldPrescriptions;
  // console.log("Old prescription", patientPrescriptionData);

  const PrescriptionDates = _.orderBy(patientPrescriptionData, [item => item.lastModified], ['desc']);
  console.log("PrescriptionDates", PrescriptionDates);


  useEffect(() => {
    dispatch(getPatientDetail());
  }, [dispatch])


  const visits = PrescriptionDates?.map((prescription) => {
    return {
      visitDate: dayjs(prescription?.createdAt).format('DD/MM/YYYY'),
      medicinePrescribed: prescription.medicineData,
      symptomObserved: prescription.Symptoms
    };
  });


  const handleDateClick = (visit) => {
    setSelectedVisit(visit);
  };
  // const handelDateSelected = (e) => {
  //   // document.getElementById(prevTableId).style.display = "none";
  //   setPrevTableId(e.target.id + "li");
  //   // document.getElementById(e.target.id + "Table").style.display = "";
  // };
  console.log(visits);

  return (
    <div>

      <div className="card">
        <div className="card-body">
          <div className="col">

            <h5>Patient Details</h5>
            {/* <h5>Name:{patientPrescriptionData ? patientPrescriptionData[0]?.Patient[0].name : null}</h5> */}
            {/* <h1>Date:{patientPrescriptionData ? dayjs(patientPrescriptionData[0]?.updatedAt).format('DD/MM/YYYY') : null}</h1> */}
          </div>
        </div>
      </div>



      <CardGroup>

        <div className="date-card-container">
          <Card>
            <Card.Header>Visit Dates</Card.Header>
            <ListGroup variant="flush">
              {visits.map((visit, index) => (
                <ListGroup.Item key={index} onClick={() => handleDateClick(visit)}>
                  {visit.visitDate}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
          {selectedVisit && (
            <div className="symptoms-medicines-container">
              <Card className="symptoms-medicines-card">
                <Card.Header>Symptoms</Card.Header>
                <ListGroup variant="flush">
                  {selectedVisit.symptomObserved.map((symptom, index) => (
                    <ListGroup.Item key={index}>{symptom}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
              <Card className="symptoms-medicines-card">
                <Card.Header>Medicines</Card.Header>
                <ListGroup variant="flush">
                  {selectedVisit.medicinePrescribed.map((medicine, index) => (
                    <ListGroup.Item key={index}>
                      {medicine.medicineDetails.medicineName} ({medicine.dose})
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </div>
          )}
        </div>
        {/* <Row className="row align-items-start">
            {visits.map((visit, index) => {

              <>
                <Col>
                  <Card>
                    <Card.Header>Symptoms</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        gfjhkkllghtf

                      </Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Header>Medicines</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        yhgfghjhjkkl

                        {visit.medicinePrescribed?.map(medicine => (
                          <li key={medicine._id}>{medicine.dose} - {medicine.medicineDetails}</li>
                        ))}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

              </>
            })}


            <Col>
              <Card>
                <Card.Header>Other Details</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <div>
                      {visits?.map((visit, index) => {
                        return (
                          <p onClick={handelDateSelected} id={index + "visit"}>
                            {visit.visitDate}
                          </p>
                        );
                      })}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row> */}


      </CardGroup>


    </div>
  )
}

export default OldPrescriptions