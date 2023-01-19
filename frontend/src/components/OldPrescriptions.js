
import React, { useState, useEffect, useContext } from 'react'
import { getPatientDetail } from '../actions/prescriptionActions';
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import * as _ from 'lodash'
import CardGroup from 'react-bootstrap/CardGroup';
import { Col, Button, Row, Card, ListGroup } from 'react-bootstrap'
import '../oldPrescription.css'
import { useLocation } from 'react-router-dom'


const OldPrescriptions = () => {
  const dispatch = useDispatch();

  const [selectedVisit, setSelectedVisit] = useState(null);
  const [createdAtDates, setCreatedAtDates] = useState([]);
  const [patientDataPrescription, setPatientDataPrescription] = useState({
    createdAtDates: [],
    patientInfo: {}
  });

  const { state } = useLocation();
  const patientData = state ? state.data : null;
  // console.log("patientData", patientData);


  const OldPrescriptions = useSelector((state) => state.getPatientPrescriptionList)
  const { loadingp, errorp, patientPrescriptionData } = OldPrescriptions;
  // console.log("Old prescription", patientPrescriptionData);

  const PrescriptionDates = _.orderBy(patientPrescriptionData, [item => item.lastModified], ['desc']);
  // console.log("PrescriptionDates", PrescriptionDates);


  useEffect(() => {
    dispatch(getPatientDetail());
  }, [dispatch])

  useEffect(() => {
    const patientId = patientData;
    const patientPrescriptions = PrescriptionDates?.filter(prescription => prescription.Patient[0]._id === patientId);
    // console.log("patientPrescriptions",patientPrescriptions)
    // const uniqueDates = patientPrescriptions?.map(item => item.createdAt);
    // console.log(uniqueDates)
    // setCreatedAtDates(uniqueDates);
    // setPatientInfo({
    //   name: patientPrescriptions[0]?.Patient[0].name,
    //   weight: patientPrescriptions[0]?.Patient[0].weight,
    //   age: patientPrescriptions[0]?.Patient[0].age,
    // });

    setPatientDataPrescription({
      createdAtDates: patientPrescriptions?.map(prescription => prescription.createdAt),
      patientInfo: {
        name: patientPrescriptions[0]?.Patient[0].name,
        weight: patientPrescriptions[0]?.Patient[0].weight,
        age: patientPrescriptions[0]?.Patient[0].age,
      }
    });

  }, [patientData]);

 

  // const patientPrescriptions = PrescriptionDates?.filter(prescription => prescription.PrescriptionDates?.Patient[0]._id === patientData?._id);
  // console.log("patientPrescriptions", patientPrescriptions)

  // const uniqueDates = PrescriptionDates?.map(item => item.PrescriptionDates?.Patient[0]._id === patientData?._id);
  // console.log("Unique Date",uniqueDates)

  // const uniqueDates = Array.from(new Set(patientPrescriptions?.map(item => item.PrescriptionDates?.Patient[0]._id === patientData?._id)));
  // console.log("Unique Date",uniqueDates)

  // const visits = createdAtDates?.map((date) => {
  //   return {
  //     visitDate: dayjs(date).format('DD/MM/YYYY'),
  //     medicinePrescribed: date.medicineData,
  //     symptomObserved: date.Symptoms
  //   };
  // });

  const patientId = patientData;
    const patientPrescriptions = PrescriptionDates?.filter(prescription => prescription.Patient[0]._id === patientId);
  // const patientId = patientData && state.patientData;
  // const patientPrescriptions = patientDataPrescription?.filter(prescription => prescription.Patient[0]._id === patientId);
  const visits = patientDataPrescription.createdAtDates?.map((date) => {
    const prescriptionD = patientPrescriptions?.filter(p => p.createdAt === date);
    return {
      visitDate: dayjs(date).format('DD/MM/YYYY'),
      medicinePrescribed: prescriptionD[0]?.medicineData,
      symptomObserved: prescriptionD[0]?.Symptoms
    };
  });


  console.log("VIsits",visits)

  const handleDateClick = (visit) => {
    setSelectedVisit(visit);
  };


  return (
    <div>

      <div className="card">
        <div className="card-body">
          <div className="col">

            <h5>Patient Details</h5>
           <h6> Patient Name: {patientDataPrescription.patientInfo.name}</h6>
           <h6> {patientDataPrescription.patientInfo.weight}</h6>
        
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
                  {selectedVisit.symptomObserved?.map((symptom, index) => (
                    <ListGroup.Item key={index}>{symptom}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
              <Card className="symptoms-medicines-card">
                <Card.Header>Medicines</Card.Header>
                <ListGroup variant="flush">
                  {selectedVisit.medicinePrescribed?.map((medicine, index) => (
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