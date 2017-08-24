import { Component } from '@angular/core';
import { MessageServices } from '../../services/message/message.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'message',
  templateUrl: './message.component.html',
  providers: [MessageServices],
})
export class MessageComponent  {
  messages: Message[];
  moreMessages: boolean;
  constructor(private messageService: MessageServices){
    this.messageService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
    this.moreMessages = false;
  }

  showMore(){
    if(this.moreMessages === true){
      return this.moreMessages = false;
    } else{
      return this.moreMessages = true;
    }
  }

}

interface Message{
  id: number;
  date: string;
  answered: boolean;
  sender: string;
  mtext: string;
  read: boolean;
}