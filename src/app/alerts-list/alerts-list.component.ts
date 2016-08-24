import { Component, Inject, ViewEncapsulation } from '@angular/core';

import { AlertsService } from './../services/alerts.service';
import AlertItem from '../model/alert.model';
import { WsService } from './../services/ws.service';
import { ItemsListComponent } from './items-list/items-list.component';
import * as alertActions from './../actions/actions';

@Component({
    selector: 'alerts-list',
    styleUrls: [
        './alerts-list.css'
    ],
    encapsulation: ViewEncapsulation.None,
    template: `
        <h1>Alerts List</h1>

        <div class="alerts">
            <items-list
                        (delete)="deleteItem($event)">
            </items-list>
        </div>
    `,
    directives: [ItemsListComponent],
    providers: [AlertsService, WsService]
})
export class AlertsListComponent {

    constructor(private alertsService: AlertsService, @Inject('AppStore') private appStore: any) {
        this.alertsService.alertItems.subscribe(msg => {
            this.appStore.dispatch(alertActions.addAlert(msg));
        });
    }

    deleteItem(delItem: AlertItem) {
        this.appStore.dispatch(alertActions.removeAlert(delItem));
    }
}
