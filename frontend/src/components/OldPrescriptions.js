
import React, { useState, useEffect } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getPatientDetail } from '../actions/prescriptionActions';
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import * as _ from 'lodash'
import moment from 'moment'

const OldPrescriptions = () => {
    const dispatch = useDispatch();

    const [expanded, setExpanded] = React.useState(false);

    const OldPrescriptions = useSelector((state) => state.getPatientPrescriptionList)
    const { loadingp, errorp, patientPrescriptionData } = OldPrescriptions;
    console.log("Old prescription", patientPrescriptionData);

    const PrescriptionDates = _.orderBy(patientPrescriptionData, [item => item.lastModified], ['desc']);

    // const FilterDates = patientPrescriptionData.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    console.log("PrescriptionDates",PrescriptionDates);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    useEffect(() => {
        dispatch(getPatientDetail());
    }, [dispatch])
    return (
        <div>

            <div className="card">
                <div className="card-body">
                    <div className="col">

                        <h5>Patient Details</h5>
                        <h5>Name:{patientPrescriptionData ? patientPrescriptionData[0]?.Patient[0].name : null}</h5>
                        <h1>Date:{patientPrescriptionData ? dayjs(patientPrescriptionData[0]?.updatedAt).format('DD/MM/YYYY') : null}</h1>
                    </div>
                </div>
            </div>
            <div>
             
            </div>



        </div>
    )
}

export default OldPrescriptions