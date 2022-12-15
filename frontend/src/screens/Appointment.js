import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { getUserInfoDetails } from '../actions/userActions'
import { listConsultants, getConsultantDetails, consultationLink } from '../actions/consultationActions.js'
import { useDispatch, useSelector } from 'react-redux'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';


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





  


  const [sortModel, setSortModel] = useState([
    {
      field: "date",
      sort: "desc"
    }
  ]);

  // Appointment Tab Columns
  const AppointmentColumns = [
    { field: '_id', headerName: 'ID', width: 90, hide: true },
    { field: 'name', headerName: 'Patient Name', width: 120 },
    {
      field: 'email', headerName: 'Email_Id', width: 190,
    },
    { field: 'age', headerName: 'Age', width: 120 },
    { field: 'weight', headerName: 'Patient Weight', width: 140 },
    { field: 'gender', headerName: 'Gender', width: 140 },
    { field: 'treatment', headerName: 'Treatment', width: 140 },
    { field: 'duration', headerName: 'Duration(Months)', width: 140 },
    { field: 'reference', headerName: 'Reference', width: 140 },
  ];


  useEffect(() => {
    // Dispatch the list doctors action and fill our state
    // dispatch(listDoctors())
    // dispatch(listConsultants())
    dispatch(getUserInfoDetails());
  }, [dispatch])


  useEffect(() => {
    const data = users?.length > 0 && users[0] !== 'undefined'
    // const data = consultants?.filter((consultantInfo) => consultantInfo?.name == doctorInfo?.name)
    setConsultantRowData(data)

  }, [users])
  // console.log({ consultantRowData })

  return (
    <>

      <div style={{ marginTop: "6rem" }}>
        {/* <Box
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
                {/* {console.log("name", option.name)} 
              </MenuItem>
            ))}
          </TextField>
        </Box>*/}
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
        <h1>Patient Data</h1>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            getRowId={(r) => r._id}
            rows={users}
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