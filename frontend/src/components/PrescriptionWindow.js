import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { IconButton } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import '../prescription.css'
import { getUserInfoDetails } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import Autocomplete from '@mui/material/Autocomplete';

const PrescriptionWindow = () => {
    const dispatch = useDispatch()
    const [medicineList, setMedicineList] = useState([])

    //Symptoms Event
    const [selectValue, setSelectValue] = React.useState("");
    const onSelectChange = (event) => {
        const value = event.target.value;
        setSelectValue(value);
    };

    const dummyData = [
        {
            "id": 1,
            "text": "Devpulse"
        }, {
            "id": 2,
            "text": "Linklinks"
        }, {
            "id": 3,
            "text": "Centizu"
        }, {
            "id": 4,
            "text": "Dynabox"
        }, {
            "id": 5,
            "text": "Avaveo"
        }, {
            "id": 6,
            "text": "Demivee"
        }, {
            "id": 7,
            "text": "Jayo"
        }, {
            "id": 8,
            "text": "Blognation"
        }, {
            "id": 9,
            "text": "Podcat"
        }, {
            "id": 10,
            "text": "Layo"
        }]


    const searchList = (e) => {
        console.log(e)
        if (e.length > 2) {
            setMedicineList(dummyData.filter((r) => {
                return (
                    r.text.toLowerCase().includes(e.toLowerCase())
                )

            }))
        }


    }


    const getMedicines = () => {
        console.log("Medicine is", medicineList)
        return medicineList.map((medicine) => {
            return <option value={medicine.id}>{medicine.text}
            </option>;
        });
    }


    //medicine events
    const [inputFields, setInputFields] = useState([
        { drug: '', duration: '', instruction: '' }
    ])

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const addFields = () => {
        let newfield = { drug: '', duration: '', instruction: '' }
        setInputFields([...inputFields, newfield])
    }

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

            {/* table Starts */}

            <table className="table table-borderless" bordercolor="black"  >
                <tr>
                    <td style={{ borderRight: "1px solid " }}>

                        <input type="text" placeholder='Add Symptoms here' onChange={onSelectChange} />
                        {selectValue && <h2 className="mt-3">{selectValue}</h2>}
                    </td>

                    <td>
                        <div>
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
                        </div>

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
                    <td style={{ width: "40%" }}>
                        <table border="1px" bordercolor="black" cellspacing="5px" cellpadding="5%" align="center" >
                            <h4 align="center">Other Details</h4>
                            <tr>

                                <td colspan="2">
                                    <input type="text" placeholder='Ayurveda Diagnosis' />
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <input type="text" placeholder='M Diagnosis' />
                                </td>
                                <td >
                                    <input type="text" placeholder='Modern System' />
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <input type="text" placeholder='Treatment' />
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
                                <td >
                                    <input type="text" placeholder='Ayurveda' />
                                </td>
                                <td>
                                    <div>
                                        <Autocomplete
                                            getOptionLabel={option => option.text}
                                            disablePortal
                                            placeholder="Panchkarma"
                                            id="combo-box-demo"
                                            options={dummyData}
                                            sx={{
                                                width: 176, p: "10px", mx: "21px", borderRadius: 1,
                                                mt: "-18px", 
                                            }}

                                            renderInput={(params) => <TextField {...params} text="Movie" />}
                                        />

                                        {/* <select style={{
                                            width: "150px",
                                            margin: "21px 0 0 4px"

                                        }}>

                                            <option selected value=""></option>
                                            <option value="Years">Years</option>
                                            <option value="Days">Days</option>

                                        </select> */}
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
                                            <td> 0</td>
                                            <td> Image</td>

                                        </tr>
                                        <tr>
                                            <td> Medicines</td>
                                            <td> 0</td>
                                            <td> Video</td>

                                        </tr>
                                        <tr>
                                            <td> Paid</td>
                                            <td> 0</td>
                                            <td> Report</td>
                                        </tr>
                                        <tr>
                                            <td> Debit/Credit</td>
                                            <td> 0</td>
                                            <td> Diet</td>
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
            <Button type='submit' variant='primary'>
                Save
            </Button>



        </>

    )
}

export default PrescriptionWindow