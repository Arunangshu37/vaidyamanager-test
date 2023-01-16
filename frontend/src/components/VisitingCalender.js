import React, { useState, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../visitingcalender.css'

const VisitingCalender = () => {
  return (
    <div>
      VisitingCalender

      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      <table className="striped bordered visiting" bordercolor="black">
        <thead>
          <tr>
            <th>No</th>
            <th>Visit Date</th>
            <th>Next Visit</th>
            <th>Days</th>
            <th>Days</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default VisitingCalender