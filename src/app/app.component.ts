import { Component, ViewEncapsulation } from '@angular/core';

import { AlertsListComponent } from './alerts-list/alerts-list.component';

@Component({
    selector: 'alerts-app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.style.css'
    ],
    template: `
        <main>
            <alerts-list></alerts-list>
        </main>
        
        <footer>
            Footer 2016 
        </footer>
    `,

    directives: [AlertsListComponent],
})
export class AppComponent { }

