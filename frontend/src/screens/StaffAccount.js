import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import { Col, Button, Row, Card, ListGroup } from 'react-bootstrap'

function StaffAccount() {
  return (
    <div>
      StaffAccount
      <article class="card">
        <header>
          <h2>Staff details</h2>
        </header>
        {/* <img src="balloons2.jpg" alt="Hot air balloons"/> */}
        <div class="content">
          <Card>
            <Card.Body>
             
            </Card.Body>
          </Card>
          <table className="striped bordered visiting" bordercolor="#6caaa8">
            <thead>
              <tr>
                <th>
                 Staff Name
                </th>
                <th>Access</th>
              </tr>
            </thead>
            <tbody>            
                  <tr>
                    <td></td>
                    <td></td>

       
                  </tr>
            </tbody>
          </table>
        </div>
      </article>


    </div>
  )
}

export default StaffAccount