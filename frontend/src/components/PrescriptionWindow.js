import React, { useState, useEffect } from 'react'
import { Form, Button, Modal, ListGroup, InputGroup, Card } from 'react-bootstrap'
import { Checkbox, IconButton } from '@mui/material'
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import '../prescription.css'
import { getUserDesc } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import { DiechartList } from './DiechartList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import jsPDF from 'jspdf'
import dayjs from 'dayjs'
import { getMedicines } from '../actions/prescriptionActions'
import '../prescriptionWindow.css'

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
    treatmentdays: "",
    panchkarma: [],
    ayurveda:""

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

  // const getMedicines = () => {
  //   console.log("Medicine is", medicineList)
  //   return medicineList.map((medicine) => {
  //     return <option value={medicine.id}>{medicine.text}
  //     </option>;
  //   });
  // }

  //fetching medicines

  const allMedicines = useSelector((state) => state.getallMedicineList)
  const { loadingMedicine, errorMedicine, medicinesList } = allMedicines;
  console.log("Medicine List", allMedicines)



  // const [selectValue, setSelectValue] = React.useState("");
  // const onSelectChange = (event) => {
  //   const value = event.target.value;
  //   setSelectValue(value);
  // };

  const symptomsOptions = [
    { value: '', text: '--Add Symptoms--' },
    { value: 'Dry skin', text: 'Dry skin' },
    { value: 'Coarse hair and skin', text: 'Coarse hair and skin' },
    { value: 'Weight gain', text: 'Weight gain' },
  ]


  // Latest User(Patient)
  const Patient = useSelector((state) => state.getLatestUSer)
  const { loadingUsers, errorUsers, userdesc } = Patient;



  useEffect(() => {
    dispatch(getUserDesc());
    dispatch(getMedicines());
  }, [dispatch])


  //sanskrit search
  const [englishWord, setEnglishWord] = useState('');
  const [sanskritWord, setSanskritWord] = useState('');



  const handleWordChange = (event) => {
    setEnglishWord(event.target.value);
    // Translate the English word to Sanskrit using an API or some other method
    // const sanskritTranslation = translateToSanskrit(englishWord);
    // setSanskritWord(sanskritTranslation);
  }


  //use state for dynamic input fields for medicines
  const [inputFields, setInputFields] = useState([]);




  const addFields = (event) => {
    // if require do trimming check "how to trim in java script"
    // console.log("textconetect",event.target.textContent);
    // let med = allMedicines.medicineList?.find((med) => {console.log(med);return med.medicineName === 'Chandanasava'} )
    // let newfield = { Dose: '', med: med }
    // setInputFields([...inputFields, newfield])
    // console.log("all medic",med);
    let newfield = { Dose: '' }
    setInputFields([...inputFields, newfield])
  }

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
  }
  const handleFormChange = (e) => {
    // let data = [...inputFields];
    console.log("first")
    let data;
    // data[index][e.target.name] = e.target.value;
    console.log("data", data)
    setInputFields(data);
  }







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
    // console.log("NameVal", name, value);

    if (name === "consult") {
      const newPaid = Number(value) + Number(inputVal.medicine);
      updateInputVal({ paid: newPaid });
    }
    if (name === "medicine") {
      const newPaid = Number(value) + Number(inputVal.consult);
      updateInputVal({ paid: newPaid });
    }
    if (name === "discount") {
      // console.log("value",value)
      const newPaid = Number(inputVal.paid) - Number(value);
      updateInputVal({ debitcredit: newPaid });
      // console.log("paid",inputVal)
    }
    updateInputVal({ [name]: value });
  };
  // payment code ends

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const handleShow = () => {
    setAllowanceState("1");
    setShow(true);

  };

  //checkboxes
  const [allowanceState, setAllowanceState] = React.useState("");
  const [dosImport, setDosImport] = useState([]);
  const [dontImport, setDontImport] = useState([]);
  const [occasionalImport, setOccasionalImport] = useState([]);

  const dietCategories = [...new Set(DiechartList.map((item) => item.category))];

  //getIDFromUnicode
  function getIdFromUnicode(unicode) {
    switch (unicode) {
      case "✓": {
        return "1";
      }
      case "✕": {
        return "2";
      }
      case "!": {
        return "3";
      }
      default: {
        return "0";
      }
    }
  }

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


  const [dietArray, setDietArray] = React.useState([]);
  const setDietArrayLocally = (e) => {
    const tempArray = [];
    if (dietArray.length != 0) {
      dietArray.splice(0, dietArray.length)
      setDietArray([...dietArray]);
    }
    DiechartList.forEach((element) => {
      let inputId = "lb" + element.id;
      let unicode = document.getElementById(inputId).textContent.toString();
      console.log('local', unicode, inputId)

      if (unicode !== "▢") {
        setDietArray(dietArray => [...dietArray, { diet: element, allowance: getIdFromUnicode(unicode) }]);
      }

    });
    console.log("dietArray", dietArray);
    document.getElementById('dos').checked = true;
    setAllowanceState("1");
  };




  // get all funtion
  const handelAllButtonClick = (e) => {
    if (allowanceState === "4") {
      DiechartList.forEach((element) => {
        let id = "lb" + element.id;
        document.getElementById(id).innerHTML = getUniCodeFromId(
          allowanceState
        );
        // document.getElementById(inputId).value = allowanceState;
      });
      return
    }
    DiechartList.forEach((element) => {
      let id = "lb" + element.id;
      console.log(document.getElementById(id).innerHTML);
      if (document.getElementById(id).innerHTML === "▢") {
        document.getElementById(id).innerHTML = getUniCodeFromId(
          allowanceState
        );
        // document.getElementById(inputId).value = allowanceState;
      }

    });
  };




  const headerChange = (e) => {
    if (e.target.value == '5') {
      // console.log(e.target.value)
    }
    setAllowanceState(e.target.value);
  }

  const handelMarkState = (e) => {
    let index = e.target.id.replace("lb", "");
    if (allowanceState === "1") {
      e.target.innerHTML = "&#10003;";
    } else if (allowanceState === "2") {
      e.target.innerHTML = "&#10799;";
    } else if (allowanceState === "3") {
      e.target.innerHTML = "!";
    } else {
      e.target.innerHTML = "&#9634;";
    }
  };


  const [showInstruction, setShowInstruction] = useState(false);
  const handelInstructionShow = (e) => {
    setShowInstruction(true)
  }
  const handelInstructionclose = (e) => {
    setShowInstruction(false)
  }

  const generatePdf = () => {
    var doc = new jsPDF('p', 'pt', 'a4');
    doc.html(document.getElementById("instructions"), {
      callback: function (pdf) {
        pdf.save("Instructions.pdf");
      }
    })
  }

  //panchkarma toggle
  // window.onload = toggleSelect();
  const toggleSelect = () => {
    var isChecked = document.getElementById("stone").checked;
    document.getElementById("panchkarma").disabled = !isChecked;
    // console.log("set");
  }

  //add input box on selection
  const selectPanchkarma = (e) => {
    if (prescription.panchkarma.every((el) => el.name !== e.target.value)) {
      const tempData = { name: e.target.value, days: 0 }
      setPrescription({ ...prescription, panchkarma: [...prescription.panchkarma, tempData] })
    }
  }

  const removeDays = (pname) => {
    // console.log("object is",prescription.panchkarma.filter((v) => v.name !== pname))
    const a = prescription.panchkarma.filter((v) => v.name !== pname)
    setPrescription({ ...prescription, panchkarma: a })

  }

  const handlePanchkarmaDay = (e) => {
    const tempDay = prescription.panchkarma.find((el) => el.name === e.target.name)
    tempDay.days = e.target.value
    // setPrescription({ ...prescription, panchkarma: [...prescription.panchkarma, tempDay] })
    console.log("temp day", tempDay)
  }



  return (
    <>
      <div className="card">
        <div className="card-body">
          {userdesc?.map((option) => (
            <div class="row align-items-start">

              <div class="col">
                {option.name}
              </div>
              <div class="col">
                {option.age}
              </div>
              <div class="col">
                {dayjs(option.createdAt).format('MM/DD/YYYY')}
              </div>
            </div>
          ))}
        </div>

      </div>

      <Form onSubmit={submitHandler}>
        {/* table Starts */}
        <table className="table table-borderless" bordercolor="black">
          <tr>
            <td style={{ borderRight: "1px solid " }}>

              {/* <select name="symptoms" id="symptoms"
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
              </select> */}
              <label>
                Symptoms:
                <input type="text" value={englishWord} onChange={handleWordChange} />
              </label>
            </td>
            <td>

              <Autocomplete
                id="highlights-demo"
                sx={{ width: 300 }}
                options={allMedicines?.medicinesList}
                style={{ width: 130, marginRight: 25 }}
                getOptionLabel={(option) => option?.medicineName}
                renderInput={(params) => (
                  <TextField {...params} label="Medicines"
                    margin="normal" />
                )}
                // onChange = {handleFormChange}
                // onChange={(e) => console.log(e)}
                renderOption={(props, option, { inputValue }) => {
                  const matches = match(option.medicineName, inputValue, { insideWords: true });
                  const parts = parse(option.medicineName, matches);

                  return (
                    <li {...props} onClick={addFields} >
                      <div>
                        {parts.map((part, index) => (
                          <span
                            key={index}

                            style={{
                              fontWeight: part.highlight ? 400 : 200,
                            }}
                          >

                            {part.text}
                          </span>
                        ))}

                      </div>
                    </li>
                  );
                }}
              />

              {/* {inputFields.map((input, index) => {
                return (
                  <div key={index}>
                    <div id="divOuter">
                      <div id="divInner">
                        
                        <h6>{input.med.medicineName}</h6>
                        <input type="hidden" value={input.med.id} name="medId[]" />
                        <input id="partitioned" type="text" placeholder='Dose' name='dose[]' maxlength="4" value={input.Dose} />
                        <Button variant="contained"
                          onClick={() => removeFields(index)}
                        >  <DeleteIcon fontSize='medium' />  </Button>
                      </div>
                    </div>

                  </div>
                )
              })} */}

              {/* {console.log("inputfields", inputFields)} */}


            </td>
            {/* <td>
              Dose
              <br />
              <br />
              <select name="Dose" id="dose" style={{ width: "100px" }}
                value={prescription.dose}
                onChange={(e) => setPrescription({ ...prescription, dose: e.target.value })}
              >
                <option value="1-0-0-0">1-0-0-0</option>
                <option value="1-1-0-0">1-1-0-0</option>
                <option value="1-1-1-0">1-1-1-0</option>
                <option value="1-1-1-1">1-1-1-1</option>
                <option value="0-1-0-0">0-1-0-0</option>
                <option value="0-1-1-0">0-1-1-0</option>
                <option value="0-1-1-1">0-1-1-1</option>
                <option value="0-0-0-0">0-0-0-0</option>
                <option value="0-0-0-1">0-0-0-1</option>
                <option value="0-0-1-1">0-0-1-1</option>
                <option value="1-0-1-1">1-0-1-1</option>
              </select>
            </td> */}
            <td>
              {/* Qty
              <input type="text" placeholder='00' /> */}
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
                      }}
                        value={prescription.treatmentdays}
                        onChange={(e) => setPrescription({ ...prescription, treatmentdays: e.target.value })}
                      >
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
                        name="stone"
                        id='stone'
                        style={{ marginBotto: "-18px" }}
                        onClick={toggleSelect}

                      />
                      <select style={{
                        width: "150px",
                        margin: "21px 0 0 4px"
                      }}
                        id="panchkarma"
                        name='panchkarma'
                        value={prescription.panchkarma}
                        onChange={selectPanchkarma}
                      // onChange={(e) => setPrescription({ ...prescription, panchkarma: e.target.value })}
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
                  <div>
                    <Card>
                      {
                        prescription.panchkarma.map((item) => (
                          <>
                            <Card.Body>
                              {item.name}
                              <input type="text" name={item.name} placeholder='days' onChange={handlePanchkarmaDay} />
                              <Button onClick={() => removeDays(item.name)}>-</Button>
                            </Card.Body>
                          </>
                        ))
                      }
                    </Card>
                  </div>
                </tr>
                <tr>
                  <td colSpan={'2'}>
                    <table className="table table-bordered border-primary" border={"1px"} style={{ width: "100%" }}>
                      <tr>
                        <td>Payment
                        </td>
                        <td > Rupee</td>
                        <td style={{ width: "30%" }}>Document</td>
                      </tr>
                      <tr>
                        <td> Consultation</td>
                        <td>
                          <input
                            type="text"
                            name="consult"
                            value={inputVal.consult}
                            onChange={onValueChange}
                          /></td>
                        <td>
                          Image
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
                                      <Button variant="success" onClick={() => handelInstructionShow()} >Import</Button>
                                    </div>
                                  </div>
                                </div>

                                <div>


                                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {
                                      dietCategories.map((category, index) => {
                                        return <div className='categoryClass' style={{ display: 'flex', flexDirection: 'column', margin: '0 10px' }}>
                                          {category}
                                          {/* <div style={{display:'flex', flexDirection:'column', width:'fit-content'}}> */}
                                          {
                                            DiechartList.filter((elem) => { return elem.category == category }).map((diet, index) => (
                                              <div key={index}>
                                                {
                                                  <span
                                                    onClick={handelMarkState}
                                                    id={"lb" + diet.id}
                                                    style={{ fontSize: "1.5rem", cursor: "pointer" }}
                                                    dangerouslySetInnerHTML={{ __html: getUniCodeFromId(dietArray.find((elem) => { return diet.id == elem.diet.id })?.allowance) }}
                                                  ></span>
                                                }

                                                <label htmlFor={"lb" + diet.id}> {diet.name}</label>
                                              </div>
                                            ))
                                          }
                                        </div>
                                      })
                                    }
                                  </div>
                                  <div class="row">
                                    <div class="col">
                                      <InputGroup>
                                        <InputGroup.Text>What to do</InputGroup.Text>
                                        <Form.Control as="textarea" aria-label="With textarea" />
                                      </InputGroup></div>
                                    <div class="col">
                                      <InputGroup>
                                        <InputGroup.Text>What to don't</InputGroup.Text>
                                        <Form.Control as="textarea" aria-label="With textarea" />
                                      </InputGroup>
                                    </div>
                                  </div>

                                </div>

                              </Modal.Body>
                              <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                  Close
                                </Button>
                                <Button
                                  variant="primary"
                                  onClick={setDietArrayLocally}
                                >
                                  Save Changes
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Discount</td>
                        <td>
                          <input
                            type="text"
                            name="discount"
                            value={inputVal.discount}
                            onChange={onValueChange} />
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
      <Modal
        show={showInstruction}
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Diet chart instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="instructions" style={{ padding: '15px 10px' }}>
            <div>
              <Button>Send Email</Button>
            </div>
            <dl>
              <dt>What to take ? </dt>
              <dd>
                <ul>
                  {
                    dietCategories.map((category) => {
                      return <li>
                        {
                          dietArray.filter((_) => { return _.diet.category == category && _.allowance == '1' })
                            .map((element) => element.diet.name).join(", ")
                        }
                      </li>
                    })
                  }
                </ul>
              </dd>
              <dt>What to avoid ?</dt>
              <dd>
                <ul>
                  {
                    dietCategories.map((category) => {
                      return <li>
                        {
                          dietArray.filter((_) => { return _.diet.category == category && _.allowance == '2' })
                            .map((element) => element.diet.name).join(", ")

                        }
                      </li>
                    })
                  }
                </ul>
              </dd>
              <dt>Take occasionally.</dt>
              <dd>
                <ul>
                  {
                    dietCategories.map((category) => {
                      return <li>
                        {
                          dietArray.filter((_) => { return _.diet.category == category && _.allowance == '3' })
                            .map((element) => element.diet.name).join(", ")
                        }
                      </li>
                    })
                  }
                </ul>
              </dd>
            </dl>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handelInstructionclose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => generatePdf()}
          >
            Get pdf
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default PrescriptionWindow