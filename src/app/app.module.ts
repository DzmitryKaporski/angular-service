import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Counter1Component } from './counter1/counter1.component';
import { Counter2Component } from './counter2/counter2.component';
import { Counter3Component } from './counter3/counter3.component';
import { CounterHostComponent } from './counter-host/counter-host.component';

@NgModule({
  declarations: [
    AppComponent,
    Counter1Component,
    Counter2Component,
    Counter3Component,
    CounterHostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
