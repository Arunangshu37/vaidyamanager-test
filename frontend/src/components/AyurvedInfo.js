import React from 'react'
import {Row ,Col  } from 'react-bootstrap'
import '../ayurved.css'

const AyurvedInfo = () => {
    return (
        <>

            <div className="sf_ayurved">
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

            </div>


        </>
    )
}

export default AyurvedInfo