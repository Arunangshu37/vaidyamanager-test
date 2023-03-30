import React from 'react'
import { Container } from 'react-bootstrap'
import '../banner.css'

function Banner() {
    return (
        <>
            <div className='pa-banner'>
                <Container>
                    <div className='row'>
                        <div className="col-lg-6 offset-lg-6">
                            <div className="pa-banner-text">
                                <h3 className="pa-banner-category">विशेष चिकित्सा  </h3>
                                <h2>
                                सुखायु आयुर्वेद क्लिनिक</h2>
                                <p>विद्धकर्म, अग्निकर्म और पंचकर्म केंद्र</p>
                            </div>

                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Banner