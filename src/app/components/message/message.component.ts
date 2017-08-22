import { Component } from '@angular/core';
import { MessageServices } from '../../services/message.service';

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

  reading() {

  }

}

interface Message{
  id: number;
  date: string;
  answered: boolean;
  sender: string;
  mtext: string;
  read: boolean
}