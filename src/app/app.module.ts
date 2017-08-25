import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MessageComponent } from './components/message/message.component';
// import { AppointmentsComponent } from './components/appointments/appointments.component'
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, HomeComponent, MessageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
