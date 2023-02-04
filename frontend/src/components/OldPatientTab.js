import React, { useState, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPrescriptionDetail, getPatientDetail } from '../actions/prescriptionActions'
import { Link } from 'react-router-dom'
import OldPrescriptions from './OldPrescriptions'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const OldPatientTab = ({ choosePatient }) => {
  const dispatch = useDispatch();
  const prescription = useSelector((state) => state.getPrescripionList)
  const { loading, error, prescriptionData } = prescription;
  // console.log("Prescription is", prescriptionData);

  const prescriptionDetail = useSelector((state) => state.getPatientPrescriptionList)
  const { loadingp, errorp, patientPrescriptionData } = prescriptionDetail;

  // console.log("prescriptionDetail", prescriptionDetail)

  const uniqueData = Array.from(new Set(patientPrescriptionData?.map(item => item.Patient[0]._id))).map(id => {
    return patientPrescriptionData?.filter(dataItem => dataItem.Patient[0]._id === id)[0];
  });

  useEffect(() => {
    dispatch(getPrescriptionDetail());
    dispatch(getPatientDetail());
  }, [dispatch])

  const setPatientDetail = (e) => {
    choosePatient(e.target.id);
    // console.log("setpatient id",e.target.id);
    // console.log("holg")
  };


  const searchPatient = (e) => {
    var input, filter, table, tr, td, i, txtValue;
    input = e.target.value;
    // console.log("input",input)
    filter = input.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  return (
    <div>
      {/* table Starts */}
      <table className="table table-borderless" bordercolor="#6caaa8" id="myTable">
        <tr>
          <td>
            <Form.Control
              type="search"
              placeholder="Search  Patient here"
              className="me-2"
              aria-label="Search"
              onChange={searchPatient}
            />
          </td>
          <td>
            Ayurveda Diagnosis
          </td>
          <td >
            Modern Diagnosis
          </td>
          <td >
            Contact
          </td>
          <td >
            Status
          </td>
          <td >
            Full Detail
          </td>
        </tr>
        {uniqueData.map((data, index) => (
          <tr key={index}>
            <>
              <td> {data.Patient[0].name}</td>
              <td>{data.ayurveda_diagnosis}</td>
              <td>{data.mDiagnosis}</td>
              <td>{data.Patient[0].phone}</td>
              <td>Active</td>
              <td>
                <div>
                  <Button onClick={setPatientDetail} id={data.Patient[0]._id } >View</Button>
                </div>
                <div style={{ display: "none" }}>
                </div>
              </td>
            </>
          </tr>
        ))}
      </table>
      {/* table End */}


    </div>
  )
}

export default OldPatientTab