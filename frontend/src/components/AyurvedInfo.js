import React from 'react'
import { Row, Col } from 'react-bootstrap'
// import '../ayurved.css'
import '../whyus.css'

const AyurvedInfo = () => {
    return (
        <>

            {/* <div className="sf_ayurved">
                <Row>
                    <Col>
                        <h3 className='ayuh'>The Trinity of Ayurved:  
                        </h3>
                         <h3 className='ayuh'> आहार, विहार:, चिकित्सा</h3> 
                        <div>
                            <p>
                                Your body’s needs are unique. We understand that. Our products are developed after decades of research, to match your unique needs. All our formulations are made by our experts using the purest of ayurvedic ingredients.
                                That’s how we offer you the best Chikitsa (effective products and expert consultations).
                                <br>
                                </br>
                                But as expert Ayurved practitioners, we understand that Ayurved products alone cannot help you solve your health problems. You need the right Ahaar (Ayurvedic diet) and Vihaar (lifestyle) to have great health. Along with our best Chikitsa,
                                we encourage you to follow our Ahaar & Vihaar recommendations too.
                                <br></br>
                                We are here to help you lead a healthy and wholesome life with Aahar, Vihaar & Chikitsa.
                                We are with you in your journey of Ayurved way of life.
                            </p>
                        </div>
                    </Col>

                    <Col>
                        <img src={'/images/satva.png'} />
                    </Col>
                </Row>

            </div> */}

            <div class="pa-why spacer-top spacer-bottom">
                <div class="container">
                    <div class="pa-heading">
                        <img src="/images/herbal.svg" alt="image" class="img-fluid" />
                        <h1>why pure Ayurveda</h1>
                        <h5>best for you</h5>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-6 pr-0">
                            <div class="pa-why-ul pa-why-left">
                                <ul>
                                    <li>100 % Organic</li>
                                    <li>Best Quality</li>
                                    <li>hygienic product</li>
                                    <li>Quality tested</li>
                                    <li>Health Care</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 p-0">
                            <div class="pa-why-img">
                                <img src="/images/herbal.svg" alt="image" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 pl-0">
                            <div class="pa-why-ul pa-why-right">
                                <ul>
                                    <li>100 % Organic</li>
                                    <li>Best Quality</li>
                                    <li>hygienic product</li>
                                    <li>Quality tested</li>
                                    <li>Health Care</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AyurvedInfo