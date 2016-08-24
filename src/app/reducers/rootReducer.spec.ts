import { rootReducer } from './rootReducer';
import AlertItem from '../model/alert.model';
import * as actionTypes from '../actions/actionTypes';

describe('ReversePipe', () => {
    const alertItem = new AlertItem("testName", "testDescr", "testTimestamp", "testLevel");
        const addAlertAction = {
            type: actionTypes.ADD_ALERT,
            alertItem
        };
        const expectedState = {
            alerts: [alertItem]
        };

    it('should transforms "[1, 2, 3]" to "[3, 2, 1]"', () => {
        expect(rootReducer({alerts: []}, addAlertAction)).toEqual(expectedState);
    });
});
