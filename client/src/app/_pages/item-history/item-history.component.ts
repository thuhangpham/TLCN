import { Component, OnInit, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Users, UserMess, ConvMess, ConversationData, MessageData } from '../../_models/index';
import { UsersService } from '../../_services/users.service';
import { ClickEventService } from '../../_services/click-event.service';
@Component({
  selector: 'app-item-history',
  templateUrl: './item-history.component.html',
  styleUrls: ['./item-history.component.css']
})
export class ItemHistoryComponent implements OnInit {
  image: any = 'https://graph.facebook.com/100009822242482/picture?type=large';
  // @Input() converMess: ConvMess = new ConvMess();
  @Input() user: UserMess = new UserMess();
  @Input() id: any;
  // user: Users = new Users();
  isMe: any= false;

  @ViewChild("item") el: ElementRef;
  constructor(
    private clickEventService: ClickEventService
  ) {
    this.clickEventService.onClick().subscribe(_id => {
      // console.log('click event ' + _id);
      this.id = _id;
      this.checkHightLight();
    });
  }
  checkHightLight() {
    // console.log(this.id == this.user.user._id);
    if (this.id == this.user.user._id) {
      // this.highlight('gray');
      this.isMe = true;
    }
    else this.isMe =false;
  }
  ngOnInit() {
    // console.log(this.converMess);
    // this.user = this.converMess.conversation.participants[0];
    this.checkHightLight();
  }
  @HostListener('mouseenter') onMouseEnter() {
    // this.highlight('gray');
    this.isMe = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.highlight(null);
    this.isMe = false;
    this.checkHightLight();
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
