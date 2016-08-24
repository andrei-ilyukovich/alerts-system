import * as actions from './actionTypes';
import AlertItem from '../model/alert.model';

export function addAlert(alertItem: AlertItem) {
  return { type: actions.ADD_ALERT, alertItem };
}

export function removeAlert(alertItem: AlertItem) {
  return { type: actions.REMOVE_ALERT, alertItem };
}
