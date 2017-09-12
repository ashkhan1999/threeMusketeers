import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MessageComponent } from './components/message/message.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing, FormsModule ],
  declarations: [ AppComponent, HomeComponent, MessageComponent, ConversationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
