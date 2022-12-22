import React, { useState } from 'react'
import { Container, Row, Card, Button, } from 'react-bootstrap'
import "../contact.css"
import Breadcrumb from '../components/Breadcrumb'

const ContactUs = ({ history }) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Breadcrumb />
      <Container>
        <section className="contact-page-sec">
          <div className="contactcontainer">
            <div className="row">
              <div className="col-md-4  d-flex">
                <div className="contact-info">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <i className="fas fa-map-marked"></i>
                    </div>
                    <div className="contact-info-text">
                      <h2> Clinic Address</h2>
                      <span> Sector 8, Sheltor Complex, Near KGN Xpress Hotel, Kharghar, Navi Mumbai 410210,</span>
                      <span>Maharashtra, India.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4  d-flex">
                <div className="contact-info">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-info-text  flex-fill" >
                      <h2>E-mail</h2>
                      <span>care.mindvein@gmail.com</span>
                      <span></span>
                      <span>Contact No:(+91) 8567029029</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4  d-flex">
                <div className="contact-info">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="contact-info-text" >
                      <h2>Available time</h2>
                      <span>Mon - Sat 9:00 am - 9.00 pm</span>
                      <span></span>
                      <span>Sunday Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="pa-contact-form">
                <h5 className='contact-heading'>Please Fill the Form</h5>
                <form>
                  <input type="text" placeholder="Enter your name" name="full_name" id="full_name" className="require" />
                  <input type="text" placeholder="Enter your email" name="email" id="email" className="require" data-valid="email" data-error="Email should be valid." />
                  <input type="text" placeholder="Enter your subject" name="subject" id="subject" className="require" />
                  <textarea placeholder="Message here" name="message" id="message" className="require"></textarea>
                  <button type="button" className="pa-btn submitForm">submit</button>
                  <div className="response"></div>
                </form>
              </div>
            </div>
          </div>
        </section>
       
      </Container>
    </>
  )
}

export default ContactUs
