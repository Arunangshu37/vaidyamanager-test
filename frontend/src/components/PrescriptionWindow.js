import React, { useState, useEffect } from 'react'
import { Form, Button, Modal, ListGroup } from 'react-bootstrap'
import { Checkbox, IconButton } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import '../prescription.css'
import { getUserInfoDetails } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import Autocomplete from '@mui/material/Autocomplete';
import AddIcon from '@mui/icons-material/Add';
import { DiechartList } from './DiechartList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BsSquare, BsCheckSquare, BsXSquare, BsInfoLg } from "react-icons/bs";


const PrescriptionWindow = () => {
  const [medicineList, setMedicineList] = useState([]);
  const defaultData = {
    symptoms: "",
    medicine: "",
    dose: "",
    ayurvedaDiagnosis: "",
    mDiagnosis: "",
    modernSystem: "",
    treatement: "",
    panchkarma: ""

  }
  const [prescription, setPrescription] = useState(defaultData);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    console.log("Submit")
    e.preventDefault()
    alert("Prescription Saved Successfully")
    console.log("Prescription", prescription);
    // dispatch(createInquiry(
    //     prescription.name,
    //     prescription.contact,
    //     prescription.email,
    //     prescription.inquirySubject,
    //     prescription.reference,))
    setPrescription(defaultData)

  }

  const getMedicines = () => {
    console.log("Medicine is", medicineList)
    return medicineList.map((medicine) => {
      return <option value={medicine.id}>{medicine.text}
      </option>;
    });
  }

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }

  const symptomsOptions = [
    { value: '', text: '--Add Symptoms--' },
    { value: 'Dry skin', text: 'Dry skin' },
    { value: 'Coarse hair and skin', text: 'Coarse hair and skin' },
    { value: 'Weight gain', text: 'Weight gain' },
  ]

  const medicineOptions = [
    { value: '', text: '--Add medicines here--' },
    { value: 'Ashwagandha', text: 'Ashwagandha' },
    { value: 'Boswellia', text: 'Boswellia' },
    { value: 'Brahmi', text: 'Brahmi' },
  ]

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
  }

  // UserList
  const userLists = useSelector((state) => state.userInfoDetails)
  const { users } = userLists;


  useEffect(() => {
    dispatch(getUserInfoDetails());
  }, [dispatch])


  //payment states
  const [inputVal, setInputVal] = useState({
    consult: "",
    medicine: "",
    paid: "",
    debitcredit: "",
    discount: ""
  });


  const updateInputVal = (pairs) =>
    setInputVal((prevInputVal) => ({ ...prevInputVal, ...pairs }));

  const onValueChange = (event) => {
    const { name, value } = event.target;
    console.log("NameVal", name, value);

    if (name === "consult") {
      const newPaid = Number(value) + Number(inputVal.medicine);
      updateInputVal({ paid: newPaid });
    }
    if (name === "medicine") {
      const newPaid = Number(value) + Number(inputVal.consult);
      updateInputVal({ paid: newPaid });
    }
    // if(name === "discount"){
    //   const newPaid = Number(value) - Number(inputVal.discount);
    //   updateInputVal({ paid: newPaid });
    //   console.log("paid")
    // }
    updateInputVal({ [name]: value });
  };

  const [inputFields, setInputFields] = useState([
    { Dose: '' }
  ])

  const handleChange = (event) => {
    console.log(event.target.value);
  }

  const addFields = (event) => {
    console.log(event.target.value);
    let newfield = { Dose: '', }
    setInputFields([...inputFields, newfield])
  }

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //checkboxes
  const [allowanceState, setAllowanceState] = React.useState("1");
  const [dosImport, setDosImport] = useState([]);
  const [dontImport, setDontImport] = useState([]);
  const [occasionalImport, setOccasionalImport] = useState([]);



  function getUniCodeFromId(id) {
    switch (id) {
      case "1": {
        return "&#10003;";
      }
      case "2": {
        return "&#10799;";
      }
      case "3": {
        return "!";
      }
      default: {
        return "&#9634;";
      }
    }
  }

  const [dietArray] = React.useState([]);

  const getDietArray = (e) => {
    DiechartList.forEach((element) => {
      let inputId = "diet" + element.id;
      let val = document.getElementById(inputId).value;
      console.log('lopcal', val)
      if (val != "0") {
        dietArray.push({ diet: element, allowance: val });
      }
    });
    console.log("dietArray", dietArray);
  };


  // const handleImport = () => {
  //   switch (dietArray.allowance) {
  //     case '1':
  //       setDosImport(dietArray.filter(e => e.allowance === '1'))
  //       break;
  //     case '2':
  //       setDontImport(dietArray.filter(e => e.allowance === '2'))
  //       break;
  //     case '3':
  //       setOccasionalImport(dietArray.filter(e => e.allowance === '3'))
  //       break;

  //     default:
  //       break;
  //   }
  //   handleModalImport()

  // }

  // const handleModalImport = () => {
  //   console.log(dosImport)
  //   console.log(dontImport)
  //   console.log(occasionalImport)
  // }
  // console.log(dosImport)
  // console.log(dontImport)
  // console.log(occasionalImport)


  // get all funtion
  const handelAllButtonClick = (e) => {
    if (allowanceState === "4") {
      DiechartList.forEach((element) => {
        let id = "lb" + element.id;
        let inputId = "diet" + element.id;
        document.getElementById(id).innerHTML = getUniCodeFromId(
          allowanceState
        );
        document.getElementById(inputId).value = allowanceState;
      });
      return
    }
    DiechartList.forEach((element) => {
      let id = "lb" + element.id;
      let inputId = "diet" + element.id;
      console.log(document.getElementById(id).innerHTML);
      if (document.getElementById(id).innerHTML === "▢") {
        document.getElementById(id).innerHTML = getUniCodeFromId(
          allowanceState
        );
        document.getElementById(inputId).value = allowanceState;
      }

    });
  };

  const headerChange = (e) => {
    if (e.target.value == '5') {
      console.log(e.target.value)
    }
    setAllowanceState(e.target.value);
  }
  console.log({ allowanceState })

  const handelMarkState = (e) => {
    // console.log("hello", e.target);
    let index = e.target.id.replace("lb", "");

    if (allowanceState === "1") {
      e.target.innerHTML = "&#10003;";
      document.getElementById("diet" + index).value = "1";
    } else if (allowanceState === "2") {
      e.target.innerHTML = "&#10799;";
      document.getElementById("diet" + index).value = "2";
    } else if (allowanceState === "3") {
      document.getElementById("diet" + index).value = "3";
      e.target.innerHTML = "!";
    } else {
      document.getElementById("diet" + index).value = "0";
      e.target.innerHTML = "&#9634;";
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div class="row align-items-start">
            <div class="col">
              Patien Name
            </div>
            <div class="col">
              Age/Weight
            </div>
            <div class="col">
              Date
            </div>
          </div>
        </div>
      </div>

      <Form onSubmit={submitHandler}>
        {/* table Starts */}
        <table className="table table-borderless" bordercolor="black">
          <tr>
            <td style={{ borderRight: "1px solid " }}>

              <select name="symptoms" id="symptoms"
                //  onChange={handleChange}
                style={{ width: "195px", margin: "0px 0 0 4px" }}
                value={prescription.symptoms}
                onChange={(e) => setPrescription({ ...prescription, symptoms: e.target.value })}
              >
                {symptomsOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
              {/* <tr>
                            <td><AddIcon /></td>
                        </tr> */}
              {/* <input type="text" placeholder='Add Symptoms here' onChange={onSelectChange} />
                        {selectValue && <h2 className="mt-3">{selectValue}</h2>} */}
            </td>
            <td>
              <select name="medicine" id="medicine" style={{
                width: "195px",
                margin: "0px 0 0 4px"
              }}
                value={prescription.medicine}
                onChange={(e) => setPrescription({ ...prescription, medicine: e.target.value })}>

                {medicineOptions.map(medioption => (
                  <option key={medioption.value} value={medioption.value}>
                    {medioption.text}
                  </option>
                ))}

              </select>

              {/* Autocomplete */}
              {/* <div>
                            <Autocomplete
                                getOptionLabel={option => option.text}
                                disablePortal
                                id="combo-box-demo"
                                options={dummyData}
                                // sx={{
                                //     width: 300, p: "10px", mx: "21px", borderRadius: 1,
                                //     mt: "-18px",

                                // }}
                                placeholder="Add Medicines here"
                                renderInput={(params) => <TextField {...params} text="Movie" />}
                            />
                        </div> */}
              {/* <input type="text" placeholder='Add Medicines here' onChange={onSelectChange} />
                        {selectValue && <h2 className="mt-3">{selectValue}</h2>} */}
              {/* 
                        {inputFields.map((input, index) => {
                            return (
                                <div key={index}>
                                    <input type="text" placeholder='Add Medicines here' />
                                    {/* <input type="text" placeholder='Ayurveda Diagnosis' /> 

                                    <Button variant="contained"
                                        onClick={() => removeFields(index)}


                                    >  <DeleteIcon fontSize='medium' />  </Button>
                                </div>
                            )
                        })} */}

            </td>
            <td>
              Dose
              <br />
              <br />
              <select name="Dose" id="dose" style={{ width: "100px" }}
                value={prescription.dose}
                onChange={(e) => setPrescription({ ...prescription, dose: e.target.value })}
              >
                <option value="1-0-0-0">1-0-0-0</option>
                <option value="1-1-0-0<">1-1-0-0</option>
                <option value="1-1-1-0">1-1-1-0</option>
                <option value="1-1-1-1">1-1-1-1</option>
                <option value="0-1-0-0">0-1-0-0</option>
                <option value="0-1-1-0">0-1-1-0</option>
                <option value="0-1-1-1">0-1-1-1</option>
                <option value="0-0-0-0">0-0-0-0</option>
                <option value="0-0-0-1<">0-0-0-1</option>
                <option value="0-0-1-1">0-0-1-1</option>
                <option value="1-0-1-1">1-0-1-1</option>
              </select>
              {/* {inputFields.map((input, index) => {
                            return (
                                <div key={index}>
                                    <input type="text" placeholder='' />


                                    <Button variant="contained"
                                        onClick={() => removeFields(index)}


                                    >  <DeleteIcon fontSize='medium' />  </Button>
                                </div>
                            )
                        })}   */}
            </td>
            <td>
              Qty
              <input type="text" placeholder='00' />
            </td>

            <td style={{ width: "40%" }}>
              <table border="1px" bordercolor="black" cellspacing="5px" cellpadding="5%" align="center" >
                <h4 align="center">Other Details</h4>
                <tr>

                  <td colspan="2">
                    <input type="text" id="ayurvedaDiagnosis" placeholder='Ayurveda Diagnosis'
                      value={prescription.ayurvedaDiagnosis}
                      onChange={(e) => setPrescription({ ...prescription, ayurvedaDiagnosis: e.target.value })}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" id="mDiagnosis" placeholder='M Diagnosis'
                      value={prescription.mDiagnosis}
                      onChange={(e) => setPrescription({ ...prescription, mDiagnosis: e.target.value })}
                    />
                  </td>
                  <td>
                    <input type="text" id="modernSystem" placeholder='Modern System'
                      value={prescription.modernSystem}
                      onChange={(e) => setPrescription({ ...prescription, modernSystem: e.target.value })}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" id="treatement" placeholder='Treatment'
                      value={prescription.treatement}
                      onChange={(e) => setPrescription({ ...prescription, treatement: e.target.value })}
                    />
                  </td>
                  <td>

                    <div>
                      <select style={{
                        width: "150px",
                        margin: "21px 0 0 4px"
                      }}>
                        <option selected value="Month">Month</option>
                        <option value="Years">Years</option>
                        <option value="Days">Days</option>

                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" placeholder='Ayurveda' />
                  </td>
                  <td>
                    <div style={{
                      display: "flex",
                      justifyContent: "center"
                    }}>
                      <Form.Check
                        inline
                        label="Panchkarma"
                        name="group1"
                        style={{ marginBotto: "-18px" }}

                      />
                      <select style={{
                        width: "150px",
                        margin: "21px 0 0 4px"
                      }}
                        id="panchkarma"
                        value={prescription.panchkarma}
                        onChange={(e) => setPrescription({ ...prescription, panchkarma: e.target.value })}
                      >
                        <option selected value=""></option>
                        <option value="Vaman">Vaman</option>
                        <option value="Virechan">Virechan</option>
                        <option value="Basti">Basti</option>
                        <option value="Nasya">Nasya</option>
                        <option value="Raktamokshana">Raktamokshana</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={'2'}>
                    <table className="table table-bordered border-primary" border={"1px"} style={{ width: "100%" }}>
                      <td>Payment
                      </td>
                      <td>Rupee</td>
                      <td>Document</td>
                      <tr>
                        <td> Consultation</td>
                        <td>
                          <input
                            type="text"
                            name="consult"
                            value={inputVal.consult}
                            onChange={onValueChange}
                          /></td>
                        <td> Image
                          <div class="image-upload">
                            <img src='images/upload.png' />
                            <input id="file-input" type="file" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td> Medicines</td>
                        <td>
                          <input
                            type="text"
                            name="medicine"
                            value={inputVal.medicine}
                            onChange={onValueChange}
                          /> </td>
                        <td> Video
                          <div class="image-upload">
                            <img src='images/video.png' />
                            <input id="video-file-input" type="file" />
                          </div>
                        </td>

                      </tr>
                      <tr>
                        <td> Paid</td>
                        <td>
                          <input
                            type="text"
                            name="paid"
                            value={inputVal.paid}
                            onChange={onValueChange} /></td>
                        <td> Report
                          <div class="image-upload">
                            <img src='images/medical-report.png' />
                            <input id="report-file-input" type="file" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td> Debit/Credit</td>
                        <td>
                          <input
                            type="text"
                            name="debitcredit"
                            value={inputVal.debitcredit}
                            onChange={onValueChange} readOnly />
                        </td>
                        <tr>
                        <td> </td>
                        <td>      
                          <input
                            type="text"
                            name="discount"
                            value={inputVal.discount}
                            onChange={onValueChange}  /> </td>
                        <td> </td>
                      </tr>
                        <td>
                           Diet
                          <div class="image-upload">
                            &nbsp;&nbsp;
                            <img src='images/cereal.png' onClick={handleShow} />

                            <Modal
                              show={show}
                              size="lg"
                              aria-labelledby="contained-modal-title-vcenter"
                              centered
                              // dialogClassName="modal-50w"
                              onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Diet Chart</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <div>
                                  <div class="row align-items-center">
                                    <div class="col">
                                      <input
                                        id="dos"
                                        defaultChecked
                                        type="radio"
                                        value="1"
                                        name="allowance"
                                        onChange={headerChange}
                                      />
                                      <label htmlFor="dos">Do's</label>
                                    </div>
                                    <div class="col">
                                      <input
                                        id="dont"
                                        type="radio"
                                        value="2"
                                        name="allowance"
                                        onChange={headerChange}
                                      />
                                      <label htmlFor="dont">Dont's</label>
                                    </div>
                                    <div class="col">
                                      <input
                                        id="Occasional"
                                        type="radio"
                                        value="3"
                                        name="allowance"
                                        onChange={headerChange}
                                      />
                                      <label htmlFor="Occasional">Occasional</label>
                                    </div>
                                    <div class="col">
                                      <input
                                        id="Omit"
                                        type="radio"
                                        value="4"
                                        name="allowance"
                                        onChange={headerChange}
                                      />
                                      <label htmlFor="Omit">Omit</label>
                                    </div>
                                    <div class="col">
                                      <input
                                        id="all"
                                        type="button"
                                        value="all"
                                        name="allowance"
                                        onClick={handelAllButtonClick}
                                      />
                                      <label htmlFor="all">All</label>
                                    </div>
                                    <div class="col">
                                      <Button variant="success" >Import</Button>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  {DiechartList.map((diet, index) => (
                                    <div key={index}>
                                      {
                                        <span
                                          onClick={handelMarkState}
                                          id={"lb" + diet.id}
                                          style={{ fontSize: "1.5rem", cursor: "pointer" }}
                                        >
                                          &#x25A2;
                                        </span>
                                      }
                                      <input
                                        type="hidden"
                                        id={"diet" + diet.id}
                                        name={"diet" + diet.id}
                                        value="0"
                                      />
                                      <label htmlFor={"lb" + diet.id}> {diet.name}</label>
                                    </div>
                                  ))}

                                </div>

                              </Modal.Body>
                              <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                  Close
                                </Button>
                                <Button
                                  variant="primary"
                                  onClick={getDietArray}
                                >
                                  Save Changes
                                </Button>
                              </Modal.Footer>
                            </Modal>

                          </div>
                        </td>
                      </tr>
                      
                      <tr>
                        <td>Mode </td>
                        <td> Cash</td>
                        <td> </td>
                      </tr>

                    </table>
                  </td>

                </tr>
              </table>
            </td>
          </tr>
        </table>
        {/* table End */}
        <Button type='submit' variant='primary' >
          Save
        </Button>
      </Form>
    </>

  )
}

export default PrescriptionWindow