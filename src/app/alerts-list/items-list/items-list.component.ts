import { Component, EventEmitter, Inject, OnDestroy, Output } from '@angular/core';

import AlertItem from '../../model/alert.model';
import { AlertItemComponent } from './alert-item/alert-item.component';
import { ReversePipe } from './../../pipes/reverse.pipe';

@Component({
    selector: 'items-list',
    styleUrls: [
        './items-list.css'
    ],
    templateUrl: './items-list.html',
    directives: [AlertItemComponent],
    pipes: [ReversePipe],
})
export class ItemsListComponent implements OnDestroy {
    @Output() delete: EventEmitter<AlertItem> = new EventEmitter<AlertItem>();

    nowItems: AlertItem[] = [];
    oneMinuteItems: AlertItem[] = [];
    longAgoItems: AlertItem[] = [];
    unsubscribe: any;

    constructor( @Inject('AppStore') private appStore: any) {
        this.unsubscribe = this.appStore.subscribe(() => {
            let state = this.appStore.getState();
            let items = state.alerts;
            this.nowItems = this.getNowItems(items);
            this.oneMinuteItems = this.getOneMinuteItems(items);
            this.longAgoItems = this.getLongAgoItems(items);
        });
    }

    getNowItems(items: AlertItem[]) {
        return items.filter(item => {
            let liveTimeInSeconds = Math.floor(Date.now() / 1000) -
                Math.floor(parseInt(item.timestamp) / 1000);

            if (liveTimeInSeconds < 60) {
                return true;
            }
        });
    }

    getOneMinuteItems(items: AlertItem[]) {
        return items.filter(item => {
            let liveTimeInSeconds = Math.floor(Date.now() / 1000) -
                Math.floor(parseInt(item.timestamp) / 1000);

            if (liveTimeInSeconds >= 60 && liveTimeInSeconds < 300) {
                return true;
            }
        });
    }

    getLongAgoItems(items: AlertItem[]) {
        return items.filter(item => {
            let liveTimeInSeconds = Math.floor(Date.now() / 1000) -
                Math.floor(parseInt(item.timestamp) / 1000);

            if (liveTimeInSeconds >= 300) {
                return true;
            }
        });
    }

    ngOnDestroy() {
        this.unsubscribe();
    }
}
