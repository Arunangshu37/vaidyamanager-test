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
                    <Col >
                        <Card.Header>Today's Patient</Card.Header>
                        <Card border="info" style={{ width: '18rem' }}>

                            <Card.Body>

                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                    <Col >
                        <Card border="info" style={{ width: '18rem' }}>
                            <Card.Header>Tomorrow's Patient</Card.Header>
                            <Card.Body>

                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                    <Col >
                        <Card border="info" style={{ width: '18rem' }}>
                            <Card.Header>Quick SMS</Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                <input type="text" id="patientPhone" className='p-input' placeholder='Mobile' style={{margin:"0px 14px 9px 0px"}} />
                                <textarea id="w3review" name="message" className='p-input' rows="3" cols="50" placeholder='Message'></textarea>
                                <Button>
                                  Send
                                </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                </Row>

                {/* Columns are always 50% wide, on mobile and desktop */}
                <Row md="auto">
                    <Col >
                        <Card border="info" style={{ width: '22rem' }}>
                            <Card.Header>Appointment</Card.Header>
                            <Card.Body>
                                {/* <Card.Title>Info Card Title</Card.Title> */}
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
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                        <input type="text" id="pName" className='p-input' placeholder='Patient Name'  style={{margin:"0 14px 9px 0"}}/>
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
                    <Col >
                        <Card border="info" style={{ width: '18rem' }}>
                            <Card.Header>Notification</Card.Header>
                            <Card.Body>
                                {/* <Card.Title>Info Card Title</Card.Title> */}
                                <Card.Text>
                                    fgfgf
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                    <Col >
                        <Card border="info" style={{ width: '18rem' }}>
                            <Card.Header>Reminder</Card.Header>
                            <Card.Body>
                                {/* <Card.Title>Info Card Title</Card.Title> */}
                                <Card.Text>
                                    <input type="text" id="subject" className='p-input' placeholder='Subject' style={{margin:"0 14px 9px 0"}}/>
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
                                        </div>
                                        <div  style={{ display: "flex", justifyContent: "center" }}>
                                        <input type="checkbox" id="r1" name="SMS" value="sms" style={{width:" 45%",height: "16px"}}/>
                                        <label for="r1">SMS</label>
                                        <input type="checkbox" id="r2" name="Mail" value="mail" style={{width:" 45%",height: "16px"}}/>
                                        <label for="r2">Mail</label>
                                        <input type="checkbox" id="r3" name="Dashboard" value="dashboard"  style={{width:" 45%",height: "16px"}}/>
                                        <label for="r3">Dashboard</label>
                                        </div>
                                    <Button t variant='primary'>
                                        Save
                                    </Button>
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