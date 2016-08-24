import { AlertItemComponent } from './alert-item.component';
import AlertItem from '../../../model/alert.model';

describe('Alert Item Component', () => {
    const alertItemInfo = new AlertItem("testName1", "testDescr1", "1000", "0");
    const alertItemDebug = new AlertItem("testName2", "testDescr2", "80000", "1");
    const alertItemWarn = new AlertItem("testName3", "testDescr3", "350000", "2");
    const alertItemError = new AlertItem("testName4", "testDescr4", "350000", "3");
    const alertItem = new AlertItemComponent();

    it('should return "info"', () => {
        expect(alertItem.getBackgroundColorClass(alertItemInfo)).toEqual("info");
    });

    it('should return "debug"', () => {
        expect(alertItem.getBackgroundColorClass(alertItemDebug)).toEqual("debug");
    });

    it('should return "warn"', () => {
        expect(alertItem.getBackgroundColorClass(alertItemWarn)).toEqual("warn");
    });

    it('should return "error"', () => {
        expect(alertItem.getBackgroundColorClass(alertItemError)).toEqual("error");
    });
});
