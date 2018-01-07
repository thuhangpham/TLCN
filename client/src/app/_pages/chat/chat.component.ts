import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Users, ConvMess, MessageData, ConversationData } from '../../_models/index';
import { MessageService } from '../../_services/message.service';
import { MessSocketService } from '../../_socket/mess-socket.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  dangNhapTinNhan: boolean = false;
  messList: MessageData[] = new Array();
  // userList: Users[] = new Array();
  constructor() { }

  ngOnInit() {
  }

}