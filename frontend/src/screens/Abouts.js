import React from 'react'
import '../about.css'
import Breadcrumb from '../components/Breadcrumb'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Abouts = () => {
    return (
        <>
            <Breadcrumb />
            <div className="pa-about spacer-top spacer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="pa-about-img">
                                <img src={"/images/ayurvedbaneer2.jpg"} alt="image" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pa-about-content">
                                <div className="pa-heading">
                                    <img src={"/images/herbal.svg"} alt="image" className="img-fluid" />
                                    <h1>We are here with 25 years of experience</h1>
                                    <h5>about us</h5>
                                </div>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pa-team">
                <div class="container">
                    <div class="pa-heading">
                    </div>
                    <div>
                        <img src={"images/margadarshan.jpg"} style={{
                            width: "100%",
                            height: "550px",
                            margin: " 0 0 0 15px"
                        }} />
                    </div>
                </div>
            </div>
            <div class="pa-counter spacer-top spacer-bottom">
                <div class="container">
                    <div class="pa-heading">
                        <img src={"images/herbal.svg"} alt="image" class="img-fluid" />
                        <h1>Benefit from choosing the best</h1>
                    </div>
                    <div className='Grids'>
                        <div class="imageGrid">
                            <a href="" data-lightbox="homePortfolio">
                                <img src="images/aboutcard.jpg" />
                            </a>

                            <a href="" data-lightbox="homePortfolio" class="vertical">
                                <img src="images/panchkarmafront.png" />
                            </a>



                            <a href="" data-lightbox="homePortfolio">
                                <img src="images/ayurveda.jpg" />
                            </a>

                            <div>
                                <a href="" data-lightbox="homePortfolio" class="horizontal">
                                    <img src="images/panchkarmaback.jpg" />
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Abouts