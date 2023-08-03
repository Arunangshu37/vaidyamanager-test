import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../whyus.css'

const AyurvedInfo = () => {
    return (
        <>
            <div className="pa-why spacer-top spacer-bottom">
                <div className="container">
                    <div className="pa-heading">
                        <img src="/images/herbal.svg" alt="image" className="img-fluid" />
                        <h1>Many Problems One Solution</h1>
                        <h5>best for you</h5>
                    </div>
                    <div className="row">
                        <img src={"images/whysukhayu.png"} alt="image" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AyurvedInfo