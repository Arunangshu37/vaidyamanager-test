import React, { useState, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const ViewDetailTab = () => {
  return (
    <div>
      {/*  fisrt Card */}
      <div className="card">
        <div className="card-body">

          <div className="col">

            <h5></h5>
          </div>
        </div>
      </div>
      {/* Card Ends */}

      <table className="table table-borderless" bordercolor="black">
        <tr>

          <td>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Basic Detail</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>
          </td>

          <td>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Ayurveda</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>
          </td>
          <td>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Diet Chart</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>
          </td>

        </tr>

        <tr>
          <td>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Symptoms</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>
          </td>

          <td>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Medicines</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>
          </td>




        </tr>
      </table>

    </div>
  )
}

export default ViewDetailTab