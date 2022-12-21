import React from 'react'
import '../about.css'
import Breadcrumb from '../components/Breadcrumb'

const Abouts=() =>{
  return (
    <>
    <Breadcrumb/>
        <div className="pa-about spacer-top spacer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="pa-about-img">
                            <img src="/images/about.jpg" alt="image" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="pa-about-content">
                            <div className="pa-heading">
                                <img src="/images/herbal.svg" alt="image" className="img-fluid"/>
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
    </>
  )
}

export default Abouts