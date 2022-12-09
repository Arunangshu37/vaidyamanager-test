import React, { useState } from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'


const RefundPolicy = ({ history }) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Card className="text-center">
        <Card.Header>Refund Policy</Card.Header>
        <Card.Body>
          <Card.Title >
            <strong style={{ lineHeight: "2.2" }}>
              Welcome to Mindvein!
            </strong>
          </Card.Title>
          <Card.Text style={{ marginTop: "-12px" }}>
            At Mindvein, we do our best to ensure that you are completely satisfied with our products. We are happy to issue a full refund based on the conditions listed below
            Full Refund Possible If
            At Mindvein, we do our best to ensure that you are completely satisfied with our products. We are happy to issue a full refund based on the conditions listed below:
          </Card.Text>
          <Card.Title>
            <strong style={{ lineHeight: "2.2" }}>
              Full Refund Possible If</strong>
          </Card.Title>
          <Card.Text style={{ marginTop: "-12px" }}>

            You received a defective item;
            The ordered item(s) is lost or damaged during transit; the ordered item(s) is past its expiry date.
          </Card.Text>
          <Card.Title>
            <strong style={{ lineHeight: "2.2" }}>Please Note</strong>
          </Card.Title>
          <Card.Text style={{ marginTop: "-12px" }}>
            Mode of refund may vary depending on circumstances. If the mode of refund is by Credit/Debit Card or Net Banking, please allow 7 to 10 working days for the credit to appear in your account. While we regret any inconvenience caused by this time frame, it is the bank’s policy that delays the refund timing and we have no control over that.
          </Card.Text>
          <Card.Title>
            <strong style={{ lineHeight: "2.2" }}>How to Request a Refund</strong>

          </Card.Title>
          <Card.Text style={{ marginTop: "-11px" }}>
            To request a refund, simply contact us on email: info@mindvein.com with your order details, including the reason why you’re requesting a refund. We take customer feedback very seriously and use it to constantly improve our quality of service.
          </Card.Text>
          <Card.Title>
            <strong style={{ lineHeight: "2.2" }}> Return Policy</strong>
          </Card.Title>
          <Card.Text style={{ marginTop: "-11px" }}>
            We do our best to ensure that the products you order are delivered according to your specifications. However, should you receive an incomplete order, damaged or incorrect product(s), please notify Mindvein Customer Support immediately or within 7 working days of receiving the products, to ensure prompt resolution. Please note that Mindvein.com will not accept liability for such delivery issues if you fail to notify us within 7 working days of receipt.
            We also understand that various circumstances may arise leading you to want to return a product or products that are not defective. In these cases, we may allow the return of unopened, unused products after deducting a 20% restocking charge, ONLY if you notify us within 30 working days of receipt.
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer className="text-muted">
              <p>
            &copy; {currentYear} <strong>Mindvein</strong> - Medicine online Store
          </p>
          </Card.Footer> */}
      </Card>
      <p className="footer-links">
        <a
          href="#"
          target="_blank"
        >
        </a>
      </p>
    </>
  )
}

export default RefundPolicy