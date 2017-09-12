import {Router, ActivatedRoute, Params} from '@angular/router';
import {OnInit, Component} from '@angular/core';
import { MessageServices } from '../../services/message/message.service';

@Component({
  selector: 'conversation',
  templateUrl: './conversation.component.html',
  providers: [MessageServices],
})

export class ConversationComponent  {
  doctors: Doctor[];
  messages: Message[];
  usrMessage: string;
  sendBtnClicked: boolean;
  messageJSON: string;
  User: undefined;
  JSON: JSON;
  queryId: number;
  constructor(private messageService: MessageServices, private activatedRoute: ActivatedRoute) {
    this.messageService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
    this.sendBtnClicked = false;
    this.messageJSON = JSON.stringify('{"msg":' + this.usrMessage + '}');
    this.User = JSON.parse(this.messageJSON);
    this.JSON = JSON;
  }
  
  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      let Id = params['id'];
      this.queryId = Id;
    });
  }
  sendMessage() {
    return this.sendBtnClicked = true;
  }
  changeBtnStatus() {
    if (this.sendBtnClicked === true) {
      return this.sendBtnClicked = false;
    }
  }
  // checkMsg() {
  //   if (this.usrMessage === '') {
  //     this.sendBtnClicked = false;
  //     return true;
  //   }
  // }

}



interface Doctor {
  id: number;
  name: string;
  avatar: URL;
}

interface Message {
  id: number;
  doctorId: number;
  date: string;
  isAnswered: boolean;
  sender: string;
  mtext: string;
  isRead: boolean;
}
