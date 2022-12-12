import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom'

const TabComponent = () => {


    return (
        <div style={{marginTop:"6rem"}}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="Patient">
                <Row>
                    <Col sm={4}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="Patient">
                                <Link to={'/register'}>
                              Patient
                              </Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Therapy">
                                <Link to={'/therapy'}>
                                Therapy
                             </Link>
                             </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Inquiry">
                                <Link to={'/inquiry'}>
                                Inquiry
                             </Link></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="Patient">
                                
                            </Tab.Pane>
                            <Tab.Pane eventKey="Therapy">
                          
                            </Tab.Pane>
                            <Tab.Pane eventKey="Inquiry">
                           
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>

    )
}

export default TabComponent