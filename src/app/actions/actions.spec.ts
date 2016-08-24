import * as actions from './actions';
import * as actionTypes from './actionTypes';
import AlertItem from '../model/alert.model';

describe('actions', () => {
    it('should create an action to add a todo', () => {
        const alertItem = new AlertItem("testName", "testDescr", "testTimestamp", "testLevel");
        const expectedAction = {
            type: actionTypes.ADD_ALERT,
            alertItem
        };
        expect(actions.addAlert(alertItem)).toEqual(expectedAction);
    });

    it('should create an action to add a todo', () => {
        const alertItem = new AlertItem("testName", "testDescr", "testTimestamp", "testLevel");
        const expectedAction = {
            type: actionTypes.REMOVE_ALERT,
            alertItem
        };
        expect(actions.removeAlert(alertItem)).toEqual(expectedAction);
    });

});
