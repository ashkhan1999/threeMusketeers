import { Component } from '@angular/core';
import { MessageServices } from '../../services/message.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'message',
  templateUrl: './message.component.html',
  providers: [MessageServices],
})
export class MessageComponent  {
  messages: Message[];
  constructor(private messageService: MessageServices){
    this.messageService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
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