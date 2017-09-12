import { Component } from '@angular/core';
import { MessageServices } from '../../services/message/message.service';
@Component({
  moduleId: module.id,
  selector: 'message',
  templateUrl: './message.component.html',
  providers: [MessageServices],
})
export class MessageComponent  {
  messages: Message[];
  moreMessages: boolean;
  constructor(private messageService: MessageServices) {
    this.messageService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
    this.moreMessages = false;
  }

  showMore() {
    if (this.moreMessages) {
      return this.moreMessages = false;
    } else {
      return this.moreMessages = true;
    }
  }
}

interface Message {
  id: number;
  date: string;
  isAnswered: boolean;
  sender: string;
  mtext: string;
  isRead: boolean;
}
