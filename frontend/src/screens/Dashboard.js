import React, { useState, useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../dashboard.css';
import DatePicker from "react-datepicker";

function Dashboard() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <Container>
                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                <Row style={{ marginTop: "4rem" }}>
                    <Col xs={6} md={4}>
                        <Card.Header>Today's Patient</Card.Header>
                        <Card border="info" style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>Info Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                    <Col xs={6} md={4}>
                        <Card border="info" style={{ width: '18rem' }}>
                            <Card.Header>Tomorrow's Patient</Card.Header>
                            <Card.Body>
                                <Card.Title>Info Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                    <Col xs={6} md={4}>
                        <Card border="info" style={{ width: '18rem' }}>
                            <Card.Header>Quick SMS</Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                </Row>

                {/* Columns are always 50% wide, on mobile and desktop */}
                <Row>
                    <Col xs={6}>
                        <Card border="info" style={{ width: '20rem' }}>
                            <Card.Header>Appointment</Card.Header>
                            <Card.Body>
                                <Card.Title>Info Card Title</Card.Title>
                                <Card.Text>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={15}
                                            timeCaption="Time"
                                            dateFormat="h:mm aa"
                                        />
                                        <input type="text" id="pName" className='p-input' placeholder='Patient Name' />
                                        <input type="text" id="patientPhone" className='p-input' placeholder='Mobile' />
                                    </div>

                                    <Button t variant='primary'>
                                        Save
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                    <Col xs={6}>
                        <Card border="info" style={{ width: '18rem' }}>
                            <Card.Header>Notification</Card.Header>
                            <Card.Body>
                                <Card.Title>Info Card Title</Card.Title>
                                <Card.Text>
                                    fgfgf
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                    <Col xs={6}>
                        <Card border="info" style={{ width: '18rem' }}>
                            <Card.Header>Reminder</Card.Header>
                            <Card.Body>
                                {/* <Card.Title>Info Card Title</Card.Title> */}
                                <Card.Text>
                                    <input type="text" id="subject" className='p-input' placeholder='Subject' />
                                    <Button t variant='primary'>
                                        Save
                                    </Button>
                                    {/* <Form>
                                        <div  className="mb-3">
                                            <Form.Check  id={`check-sms-`}>
                                                <Form.Check.Input isValid />
                                                <Form.Check.Label>{`SMS`}</Form.Check.Label>
                                            </Form.Check>
                                        </div>

                                    </Form> */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Dashboard