import {
    MEDICINE_REQUEST,
    MEDICINE_SUCCESS,
    MEDICINE_FAIL,
    MEDICINE_RESET,
}
 from '../constants/prescriptionConstants'


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