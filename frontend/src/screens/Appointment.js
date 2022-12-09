import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { listDoctors } from '../actions/productActions'
import { getUserInfoDetails } from '../actions/userActions'
import { listConsultants, getConsultantDetails, consultationLink } from '../actions/consultationActions.js'
import { useDispatch, useSelector } from 'react-redux'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import PaymentsSharpIcon from '@mui/icons-material/PaymentsSharp';

const Appointment = () => {

  const [doctorName, setDoctorName] = useState('');
  const dispatch = useDispatch()
  const [consultantRowData, setConsultantRowData] = useState([])


  //user data
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  // console.log("User Info", userInfo)


  // UserList
  const userLists = useSelector((state) => state.userInfoDetails)
  const { users } = userLists;
  // console.log("users are", users)

  // console.log(users?.map((option) => (
  //   option.email
  // )))

  const consultationList = useSelector((state) => state.consultationList)
  const { loadingConsultant, errorConsultant, consultants } = consultationList;
  //doctor data
  const doctorList = useSelector((state) => state.doctorList)
  const { loading, error, doctors } = doctorList;
  // console.log("Doctors are", typeof doctors);

  // const data = consultants?.filter((consultantInfo) => consultantInfo?.name == doctorInfo?.name)
  // const doctorInfo = doctors?.filter((doctor) => {
  //   users.filter((user) => {
  //     if(doctor.email_id === user.email){
  //       console.log("doctor",doctor)
  //     }
  //   });
  // }) 



  // const doctorInfo = doctors?.find((doctor) => doctor.name === doctorName)
  // console.log("docInfo",doctorInfo)


  // console.log(typeof(users))
  // console.log("docInfo", doctorInfo)
  //consultant data





  // const handleChange = (event) => {
  //   setDoctorName(event.target.value);
  //   console.log("Event",event.target.value)
  // };

  const handleClick = (event) => {
    // console.log(event.currentTarget.value);
    // setDoctorName('');
    // console.log({ doctorName })

  };


  const [sortModel, setSortModel] = useState([
    {
      field: "date",
      sort: "desc"
    }
  ]);

  // Appointment Tab Columns
  const AppointmentColumns = [
    { field: '_id', headerName: 'ID', width: 90, hide: true },
    { field: 'patientName', headerName: 'Patient Name', width: 120 },
    {
      field: 'date', headerName: ' Appointment Date', width: 190,
      type: 'dateTime', sortable: true, valueGetter: ({ value }) => value && new Date(value)
    },
    { field: 'appointment_status', headerName: 'Status', width: 120 },
    { field: 'payment_status', headerName: 'Payment Status', width: 140 },

    {
      field: 'consultation status', headerName: 'Consultation Status', width: 140,
      renderCell: (params) => {
        // console.log("Param is",params)
        if (params.row.consultationLink === "") {
          return (
            <div className='d-flex justify-content-between align-items-center' style={{ cursor: 'pointer' }}>
              Pending
            </div>
          )
        }
        return( <div className='d-flex justify-content-between align-items-center' style={{ cursor: 'pointer' }}>
        Done
      </div>)

      }
    },
  ];


  useEffect(() => {
    // Dispatch the list doctors action and fill our state
    dispatch(listDoctors())
    dispatch(listConsultants())
    dispatch(getUserInfoDetails());
  }, [dispatch])


  useEffect(() => {
    const data = consultants?.length > 0 && consultants[0] !== 'undefined' && consultants?.filter((consultantInfo) => consultantInfo?.name === doctorName)
    // const data = consultants?.filter((consultantInfo) => consultantInfo?.name == doctorInfo?.name)
    setConsultantRowData(data)

  }, [consultants, doctorName])
  // console.log({ consultantRowData })

  return (
    <>
      Appointment
      <div style={{ marginTop: "6rem" }}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            helperText="Please select the Doctor"
          >
            {doctors?.map((option) => (
              <MenuItem key={option.value} value={option.name}>
                {option.name}
                {/* {console.log("name", option.name)} */}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </div>

      {/* <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "-5rem",
        paddingLeft: "220px"
      }} >
        <Button
          size="large"
          variant="contained"
          onClick={handleClick}
        >Contained</Button>
      </div> */}

      <div style={{ marginTop: "6rem" }}>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            getRowId={(r) => r._id}
            rows={consultantRowData}
            columns={AppointmentColumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            sortModel={sortModel}
            onSortModelChange={(model) => setSortModel(model)}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </div>

    </>
  )
}

export default Appointment