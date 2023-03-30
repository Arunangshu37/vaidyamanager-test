import React from 'react'
import { Container, Row, Card, Button, Col, Image, } from 'react-bootstrap'
import '../footer2.css'

const style = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};



const Footer = () => {
  const currentYear = new Date().getFullYear();

  const title = "Title"
  return (
    <>
      <div className="pa-footer-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="pa-foot-box">
                <h2 className="pa-foot-title">Legal Information</h2>
                <ul>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact us</a>
                  </li>
                  <li>
                    <a href="/refund-policy">Return Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

            <div className='row'>
              <div className="col-md-6 offset-md-5">
                <div >
                  <a href="https://www.facebook.com/story.php?story_fbid=pfbid0Gvgv1EvvLCVjJYUCpvuSSYbqgKt7yJgfAzSJ92u4zUZFv2YG7B3B6Jz1GUC4tCDkl&id=100076816459208&mibextid=Nif5oz&_rdr" target="_blank">
                    <img style={{ marginRight: "15px" }}
                      // src="images/facebook.svg"
                      src={"http://localhost:2000/images/facebook.svg"}
                    />
                  </a>
                  <a href="" target="_blank">
                    <img style={{ marginRight: "15px" }}
                      // src="images/instagram.svg" 
                      src={"http://localhost:2000/images/instagram.svg"}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pa-copyright pa-copyright-two">
          <div className="container">
            <p>Copyright © 2023. All right reserved. <a href=""></a></p>
          </div>
        </div>
      </>
   
  )
};

export default Footer;

