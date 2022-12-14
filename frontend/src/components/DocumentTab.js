import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


const DocumentTab = () => {
  return (
    <div>
             <Tab.Container id="left-tabs-example" defaultActiveKey="Image">
                <Row>
                    <Col className='ms-3' sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="Image">Image</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Video">Video</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Report">Report</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Diet Chart">Diet Chart</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="Image">
                              <h1></h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Video">
                            <h1></h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Report">
                            <h1></h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Diet Chart">
                            <h1></h1>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
    </div>
  )
}

export default DocumentTab