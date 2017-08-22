import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { MessageComponent } from './components/message/message.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, MessageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
