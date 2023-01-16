import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'

const BillHistoryTab = ()=> {
    return (
        <div>BillHistoryTab

            <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
            <table className="striped bordered visiting" bordercolor="#1d4e4a">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Visit Date</th>
                        <th>Consulting</th>
                        <th>Medicine</th>
                        <th>Total</th>
                        <th>Paid</th>
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

export default BillHistoryTab