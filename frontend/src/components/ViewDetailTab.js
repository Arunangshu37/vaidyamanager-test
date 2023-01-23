import React, { useState, useEffect } from 'react'
import { Form, Button, Card, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPatientDetail } from '../actions/prescriptionActions';
import * as _ from 'lodash'
import dayjs from 'dayjs'

const ViewDetailTab = ({ PatientIds }) => {
  const dispatch = useDispatch();
  const [filteredView, setFilteredView] = useState()
  const [tempToTake, setTempToTake] = useState([])
  const [tempToAvoid, setTempToAvoid] = useState([])
  const [tempToOcassional, setTempToOcassional] = useState([])

  //Prescription API to fetch Prescription List
  const OldPrescriptions = useSelector((state) => state.getPatientPrescriptionList)
  const { loadingp, errorp, patientPrescriptionData } = OldPrescriptions;


  const PrescriptionVisitData = _.orderBy(patientPrescriptionData, [item => item.lastModified], ['desc']);

  // filter visits based on patientId



  useEffect(() => {

    const view = PrescriptionVisitData?.filter(visit => visit.prescriptionUser === PatientIds);
    setFilteredView(view)
    console.log("filteredView", view)
    // const tempToTake = [];
    // const tempToAvoid = [];
    // const tempToOcassional = [];
    view.forEach((e) => {
      const tempTake = [];
      const tempAvoid = [];
      const tempOcassional = [];
      e.Diet_Chart.pateientDietChart.forEach((ele) => {
        switch (ele.allowance) {
          case "1":
            tempTake.push(ele.diet)
            break;
          case "2":
            tempAvoid.push(ele.diet)
            break;
          case "3":
            tempOcassional.push(ele.diet)
            break;
          default:
            break;
        }
      })
      setTempToTake(...tempToTake, tempTake)
      setTempToAvoid(...tempToTake, tempAvoid)
      setTempToOcassional(...tempToOcassional, tempOcassional)
    })


    // if (filteredView) {
    //   const tempTake = [];
    //   const tempOcassionaly = [];
    //   const tempAvoid = [];
    //   filteredView.forEach((e) => {
    //     e.Diet_chart[0].pateientDietChart.forEach((v) => {
    //       if (v.allowance === '1') {
    //         tempTake.push(v.diet)
    //       }
    //       else if (v.allowance === '2') {
    //         tempAvoid.push(v.diet)
    //       }
    //       else {
    //         tempOcassionaly.push(v.diet)
    //       }
    //     })
    //   })
    //   // setToTake(tempTake)
    //   // setToAvoid(tempAvoid)
    //   // setToOcassionaly(tempOcassionaly)
    // }

  }, [])

  console.log("tempToTake", tempToTake)
  console.log("tempToTake", tempToTake)
  console.log("tempToOcassional", tempToOcassional)




  //map the filteredView for the data currently only one data is showed

  return (
    <div style={{ marginTop: "3rem" }}>

      <div className="card">
        <div className="card-body">
          <div className="col">
            {/* <h6> Patient Name:{filteredView[0]?.Patient[0].name}</h6>
            <h6>Weight:{filteredView[0]?.Patient[0].weight} </h6> */}
          </div>
        </div>
      </div>


      {filteredView?.map((v, index) => {
        return (
          <Row key={index}>
            <Col>
              {index + 1}
            </Col>
            <table className="table table-borderless" bordercolor="black" style={{ backgroundColor: "aliceblue" }}>
              <tr>
                <td>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Ayurveda</Card.Title>
                      <Card.Text>
                        Ayurveda:{v.ayurveda}
                        <br />
                        Modern Diagnosis:{v.mDiagnosis}
                        <br />
                        Modern System:{v.modernSystem}
                        <br />
                        Treatment:{v.prescriptionTreatment}-{v.treatmentdays}

                      </Card.Text>

                    </Card.Body>
                  </Card>
                </td>
                <td>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Diet Chart</Card.Title>

                      <Card.Text>
                        <h6>What to take ?

                        </h6>

                        <h6>What to avoid ?</h6>
                        <h6>take Ocassionaly</h6>
                        <h6>What to Do</h6>
                        <span></span>
                        <h6>What to Don't </h6>
                        <span></span>

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
                      <Card.Text>
                        {/* {v.Symptoms.join(',')} */}
                      </Card.Text>

                    </Card.Body>
                  </Card>
                </td>

                <td>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Medicines</Card.Title>
                      {v.medicineNames}

                      <Card.Text>

                      </Card.Text>
                    </Card.Body>
                  </Card>
                </td>
              </tr>

            </table>
          </Row>
        );


      })}


    </div>
  )
}

export default ViewDetailTab