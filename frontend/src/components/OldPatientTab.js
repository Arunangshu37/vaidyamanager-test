import React, { useState, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPrescriptionDetail, getPatientDetail } from '../actions/prescriptionActions'
import { Link } from 'react-router-dom'


const OldPatientTab = () => {
  const dispatch = useDispatch();
  const prescription = useSelector((state) => state.getPrescripionList)
  const { loading, error, prescriptionData } = prescription;
  // console.log("Prescription is", prescriptionData);

  const prescriptionDetail = useSelector((state) => state.getPatientPrescriptionList)
  const { loadingp, errorp, patientPrescriptionData } = prescriptionDetail;

  // console.log("prescriptionDetail",prescriptionDetail)

  const uniqueData = Array.from(new Set(patientPrescriptionData?.map(item => item.Patient[0]._id))).map(id => {
    return patientPrescriptionData?.filter(dataItem => dataItem.Patient[0]._id === id)[0];
  });

  // console.log("uniqueData", uniqueData);

  useEffect(() => {
    dispatch(getPrescriptionDetail());
    dispatch(getPatientDetail());
  }, [dispatch])


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
      <table className="table table-borderless" bordercolor="black" id="myTable">
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
              <td>  {data.Patient[0].name}</td>
              <td>{data.ayurveda_diagnosis}</td>
              <td>{data.mDiagnosis
              }</td>
              <td>{data.Patient[0].phone}</td>
              <td>Active</td>
              <td>
                <div>
                  <Link to={{ pathname: '/oldprescriptions', state: { data: data.Patient[0]._id}}}>
                    <Button>View</Button>
                  </Link>
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