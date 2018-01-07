import { Component, OnInit, Input } from '@angular/core';
import { Users, MessageData } from '../../_models/index';
import { UsersService } from '../../_services/users.service';
@Component({
  selector: 'app-mess-item',
  templateUrl: './mess-item.component.html',
  styleUrls: ['./mess-item.component.css']
})
export class MessItemComponent implements OnInit {
  image: any = 'https://graph.facebook.com/100009822242482/picture?type=large';
  @Input() msg: MessageData = new MessageData();
  isMe: Boolean = false;
  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    // console.log(this.msg);
    if(this.userService.getUserLocal()._id==this.msg.author._id)
      this.isMe = true;
  }

}
