
import React, { useState, useEffect, useContext } from 'react'
import { getPatientDetail } from '../actions/prescriptionActions';
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import * as _ from 'lodash'
import CardGroup from 'react-bootstrap/CardGroup';
import { Col, Button, Row, Card } from 'react-bootstrap'


const OldPrescriptions = () => {
    const dispatch = useDispatch();

    const [expanded, setExpanded] = React.useState(false);

    const OldPrescriptions = useSelector((state) => state.getPatientPrescriptionList)
    const { loadingp, errorp, patientPrescriptionData } = OldPrescriptions;
    console.log("Old prescription", patientPrescriptionData);

    const PrescriptionDates = _.orderBy(patientPrescriptionData, [item => item.lastModified], ['desc']);

    // const FilterDates = patientPrescriptionData.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    console.log("PrescriptionDates", PrescriptionDates);


    useEffect(() => {
        dispatch(getPatientDetail());
    }, [dispatch])



    return (
        <div>

            <div className="card">
                <div className="card-body">
                    <div className="col">

                        <h5>Patient Details</h5>
                        <h5>Name:{patientPrescriptionData ? patientPrescriptionData[0]?.Patient[0].name : null}</h5>
                        {/* <h1>Date:{patientPrescriptionData ? dayjs(patientPrescriptionData[0]?.updatedAt).format('DD/MM/YYYY') : null}</h1> */}
                    </div>
                </div>
            </div>
            <div>
                <CardGroup>
                    <Row xs={1} md={3} className="g-4">
                        <Col>
                            <Card>
                                <Card.Header>Symptoms</Card.Header>
                                <Card.Body>
                                    {/* <Card.Title>Special title treatment</Card.Title> */}
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header>Medicines</Card.Header>
                                <Card.Body>
                                
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header>Other Details</Card.Header>
                                <Card.Body>
                                  
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </CardGroup>

            </div>



        </div>
    )
}

export default OldPrescriptions