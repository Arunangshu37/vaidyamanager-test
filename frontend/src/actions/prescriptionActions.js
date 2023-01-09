import {
    MEDICINE_REQUEST,
    MEDICINE_SUCCESS,
    MEDICINE_FAIL,
    MEDICINE_RESET,
    PRESCRIPTION_REQUEST,
    PRESCRIPTION_SUCCESS,
    PRESCRIPTION_FAIL,
    DIETCHART_REQUEST,
    DIETCHART_SUCCESS,
    DIETCHART_FAIL,

}
    from '../constants/prescriptionConstants'
import axios from 'axios'

//getting medicines list
export const getMedicines = () => async (dispatch) => {

    try {
        dispatch({
            type: MEDICINE_SUCCESS,
        })
        const { data } = await axios.get('/api/prescription/get_medicines')

        dispatch({
            type: MEDICINE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: MEDICINE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

//ADD PRESCRIPTION
export const addPrescriptionUser = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRESCRIPTION_REQUEST,
        })

        // Get user login and user info
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
        const { data } = await axios.post(`/api/prescription/add_prescription`, config)

        // Dispatch  success after making the request
        dispatch({
            type: PRESCRIPTION_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: PRESCRIPTION_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

//add Dietchart
export const addDietChart = (diet) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DIETCHART_REQUEST,
        })

        // Get user login and user info
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
        const { data } = await axios.post(`/api/prescription/add_prescription`,diet, config)

        // Dispatch  success after making the request
        dispatch({
            type: DIETCHART_SUCCESS,
            payload: data,
        })
        console.log("Diet chart data entered sucessfully",data)
    } catch (error) {
        dispatch({
            type: DIETCHART_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}