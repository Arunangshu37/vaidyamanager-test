import React, { useState } from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'
import "../contact.css"

const ContactUs = ({ history }) => {
  const currentYear = new Date().getFullYear();
  return (
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
                    <h2> Company address</h2>
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
            {/* <div className="col-md-4 col-sm d-flex">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div className="contact-info-text flex-fill">
                    <h2>Available time</h2>
                    <span>Mon - Sat 9:00 am - 9.00 pm</span>
                    <span>Sunday Closed</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="contact-page-form" method="post">
                <h2>Get in Touch</h2>
                <form action="contact-mail.php" method="post">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12  ">
                      <div className="single-input-field">
                        <input type="text" placeholder="Your Name" name="name" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 ">
                      <div className="single-input-field">
                        <input type="email" placeholder="E-mail" name="email" required />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 ">
                      <div className="single-input-field">
                        <input type="text" placeholder="Phone Number" name="phone" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="text" placeholder="Subject" name="subject" />
                      </div>
                    </div>
                    <div className="col-md-12 message-input">
                      <div className="single-input-field">
                        <textarea placeholder="Write Your Message" name="message"></textarea>
                      </div>
                    </div>
                    <div className="single-input-fieldsbtn">
                      <input type="submit" value="Send Now" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
     
    </Container>
  )
}

export default ContactUs
