import {
    MEDICINE_REQUEST,
    MEDICINE_SUCCESS,
    MEDICINE_FAIL,
    MEDICINE_RESET,
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