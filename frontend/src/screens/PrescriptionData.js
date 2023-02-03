import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { getPatientDetail } from '../actions/prescriptionActions';


const PrescriptionData = () =>{
    const dispatch = useDispatch();

  //Prescription API to fetch Prescription List
  const OldPrescriptions = useSelector((state) => state.getPatientPrescriptionList)
  const { loadingp, errorp, patientPrescriptionData } = OldPrescriptions;

  useEffect(() => {
    dispatch(getPatientDetail());
  }, [dispatch])

  
  return (
    <div>
        PrescriptionData
        </div>
  )
}

export default PrescriptionData