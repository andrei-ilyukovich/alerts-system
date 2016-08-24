import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Rx';
import { WsService } from './ws.service';
import AlertItem from '../model/alert.model';

const WEB_SOCKET_URL = 'ws://localhost:8080';

@Injectable()
export class AlertsService {
    public alertItems: Subject<AlertItem>;

    constructor(wsService: WsService) {

        this.alertItems = <Subject<AlertItem>>wsService
            .connect(WEB_SOCKET_URL)
            .map((response: MessageEvent): AlertItem => {
                let data = JSON.parse(response.data);
                return new AlertItem(data.title, data.description, data.timestamp, data.level);
            });
    }
}
