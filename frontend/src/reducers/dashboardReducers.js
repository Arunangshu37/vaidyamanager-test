import {
    DASHBOARD_APPOINTMNET_FAIL,
    DASHBOARD_APPOINTMNET_RESET,
    DASHBOARD_APPOINTMNET_REQUEST,
    DASHBOARD_APPOINTMNET_SUCCESS
}
from '../constants/dasboardConstants'

 export const createDashboardAppointmentReducer = (state = {}, action) => {
    switch (action.type) {
        case DASHBOARD_APPOINTMNET_REQUEST:
            return {
                loading: true,
            }
        case DASHBOARD_APPOINTMNET_SUCCESS:
            return {
                loading: false,
                appointmentData: action.payload,
            }
        case DASHBOARD_APPOINTMNET_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case DASHBOARD_APPOINTMNET_RESET:
            return {}
        default:
            return state
    }
}
