import {
    MEDICINE_REQUEST,
    MEDICINE_SUCCESS,
    MEDICINE_FAIL,
    MEDICINE_RESET,
    PRESCRIPTION_REQUEST,
    PRESCRIPTION_SUCCESS,
    PRESCRIPTION_FAIL,
    PRESCRIPTION_RESET,
    DIETCHART_REQUEST,
    DIETCHART_SUCCESS,
    DIETCHART_FAIL,
    DIETCHART_RESET,
    GET_PRESCRIPTION_REQUEST,
    GET_PRESCRIPTION_SUCCESS,
    GET_PRESCRIPTION_FAIL,
    GET_PRESCRIPTION_RESET,
}
    from '../constants/prescriptionConstants'

//medicines get
export const medicinesListReducer = (state = { medicinesList: [] }, action) => {
    switch (action.type) {
        case MEDICINE_REQUEST:
            return {
                loadingMedicine: true,
                medicinesList: [],
            }
        case MEDICINE_SUCCESS:
            return {
                loadingMedicine: false,
                medicinesList: action.payload,
            }
        case MEDICINE_FAIL:
            return {
                loadingMedicine: false,
                errorMedicine: action.payload,
            }
        case MEDICINE_SUCCESS:
            return {
                loadingMedicine: false,
                medicinesList: action.payload,
            }
        case MEDICINE_FAIL:
            return {
                loadingMedicine: false,
                errorMedicine: action.payload,
            }
        default:
            return state
    }
}

//dietchart add
export const dietChartDetailReducer = (state = {}, action) => {
    switch (action.type) {

        case DIETCHART_REQUEST:
            return {
                loadingDiet: true,
            }
        case DIETCHART_SUCCESS:
            return {
                loadingDiet: false,
                success: true,
                patientdiet: action.payload,

            }
        case DIETCHART_FAIL:
            return {
                loadingDiet: false,
                errorDiet: action.payload,

            }
        case DIETCHART_RESET:
            return {}
        default:
            return state
    }
}

// add prescription 
export const prescriptionDetailReducer = (state = {}, action) => {
    switch (action.type) {
        case PRESCRIPTION_REQUEST:
            return {
                loadingprescription: true,
            }
        case PRESCRIPTION_SUCCESS:
            return {
                loadingprescription: false,
                successpresc: true,
                patientPrescription: action.payload,
            }
        case PRESCRIPTION_FAIL:
            return {
                loadingprescription: false,
                errorprescription: action.payload,
            }
        case PRESCRIPTION_RESET:
            return {}
        default:
            return state
    }
}

//get prescription
export const getPrescriptionDataReducer = (state = { prescriptionList: [] }, action) => {
    switch (action.type) {
        case GET_PRESCRIPTION_REQUEST:
            return {
                loading: true,
                prescriptionList: [],
            }
        case GET_PRESCRIPTION_SUCCESS:
            return {
                loading: false,
                prescriptionList: action.payload,
            }
        case GET_PRESCRIPTION_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case GET_PRESCRIPTION_SUCCESS:
            return {
                loading: false,
                prescriptionList: action.payload,
            }
        case GET_PRESCRIPTION_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

