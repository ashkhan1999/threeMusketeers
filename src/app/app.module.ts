import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MessageComponent } from './components/message/message.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, HomePageComponent, MessageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
