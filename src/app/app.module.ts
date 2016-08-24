import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';

const appStore = createStore(rootReducer);

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  providers: [
    { provide: 'AppStore', useValue: appStore }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
