import { Component, EventEmitter, Input, Output } from '@angular/core';

import AlertItem from '../../../model/alert.model';

@Component({
    selector: 'alert-item',
    styleUrls: [
        './alert-item.css'
    ],
    templateUrl: './alert-item.html',
})
export class AlertItemComponent {
    @Input() item: AlertItem;
    @Output() delete: EventEmitter<AlertItem> = new EventEmitter<AlertItem>();

    getBackgroundColorClass(item) {
        switch (item.level) {
            case '0':
                return 'info';
            case '1':
                return 'debug';
            case '2':
                return 'warn';
            case '3':
                return 'error';
            default:
                return 'default';
        }
    }

    getLivePeriod(item: AlertItem): string {
        let liveTimeInSeconds = Math.floor((Date.now() - parseInt(item.timestamp)) / 1000);

        if (liveTimeInSeconds < 60) {
            return liveTimeInSeconds + 's';
        } else if (liveTimeInSeconds < 300) {
            return Math.floor(liveTimeInSeconds / 60) + 'min';
        } else {
            return new Date(item.timestamp).toLocaleDateString('en-US');
        }
    }
}
