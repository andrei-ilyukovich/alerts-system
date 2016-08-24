import * as AlertActions from './../actions/actionTypes';

const initialState = {
    alerts: [],
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case AlertActions.ADD_ALERT:
            return {
                alerts: state.alerts.concat(action.alertItem),
            };
        case AlertActions.REMOVE_ALERT:
            return {
                alerts: state.alerts.filter(alert => alert !== action.alertItem),
            };
        default:
            return state;
    }
}
