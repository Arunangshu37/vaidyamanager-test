import{
    DOCTORS_LIST_SUCCESS,
    DOCTORS_LIST_FAIL,
    DOCTORS_UPDATE_SUCCESS,
    DOCTORS_UPDATE_FAIL,
    DOCTORS_UPDATE_REQUEST,
    DOCTORS_APPOINTMENT_SUCCESS,
    DOCTORS_APPOINTMENT_FAIL,
    DOCTORS_APPOINTMENT_REQUEST,
    DOCTORS_DELETE_SUCCESS,
    DOCTORS_DELETE_FAIL,
    DOCTORS_DELETE_REQUEST,
    DOCTORS_DATA_FAIL,
    DOCTORS_DATA_REQUEST,
    DOCTORS_DATA_SUCCESS
} from '../constants/doctorConstants';
import axios from 'axios';

//doctor api
export const createDoctorData = (doctor) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DOCTORS_DATA_REQUEST,
        })

        // Get user login and user info
        const {
            userLogin: { userInfo },
        } = getState()

        // console.log("${userInfo.token}", userInfo);

        // Header to send with the request
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        // Make request to server and get the response data
        const { data } = await axios.post(`/api/doctors/add_doc`,doctor ,config)

        // Dispatch doctor success after making the request
        dispatch({
            type: DOCTORS_DATA_SUCCESS,
            payload: data,
        })
        alert('Doctor Added Successfully..')
    } catch (error) {
        dispatch({
            type: DOCTORS_DATA_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })

    }
}

export const listDoctors = () => async (dispatch) => {
    try {
        dispatch({
            type: DOCTORS_LIST_SUCCESS,
        })
        const { data } = await axios.get('/api/doctors/doc')

        dispatch({
            type: DOCTORS_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: DOCTORS_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const updateDoctor = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DOCTORS_UPDATE_REQUEST,
        })

        // Get user login and user info
        const {
            userLogin: { userInfo },
        } = getState()

        // console.log("${userInfo.token}", userInfo);

        // Header to send with the request
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        // Make request to server and get the response data
        const { data } = await axios.put(`/api/doctors/${id}/doc`,
            config
        )

        // Dispatch doctor success after making the request
        dispatch({
            type: DOCTORS_UPDATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: DOCTORS_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })

    }
}

export const updateAppointments = (id, dateid, details) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DOCTORS_APPOINTMENT_REQUEST,
        })

        // Get user login and user info
        const {
            userLogin: { userInfo },
        } = getState()

        // console.log("${userInfo.token}", userInfo);

        // Header to send with the request
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        // Make request to server and get the response data
        const { data } = await axios.put(`/api/doctors/${id}/doc/${dateid}`,
            details, config)

        // Dispatch doctor success after making the request
        dispatch({
            type: DOCTORS_APPOINTMENT_SUCCESS,
            payload: data,
        })
        // console.log("Success")


    } catch (error) {
        dispatch({
            type: DOCTORS_APPOINTMENT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
        // console.log("Fail")

    }
}

export const cancelAppointmentDates = (id, deleteid) => async (
    dispatch,
    getState
) => {
    try {
        dispatch({
            type: DOCTORS_DELETE_REQUEST,
        })

        // Get user login to get the bearer token
        const {
            userLogin: { userInfo },
        } = getState()

        // Header to send with the request
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        // Make request to server and get the response data
        const { data } = await axios.delete(
            `/api/doctors/${id}/deleteappointment/${deleteid}`,
            config
        )
        // Dispatch  success after making the request
        dispatch({
            type: DOCTORS_DELETE_SUCCESS,
            payload: data,
        })
        // console.log("Success Appointment Delete")

    } catch (error) {
        dispatch({
            type: DOCTORS_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
        // console.log("Fail")

    }
}


