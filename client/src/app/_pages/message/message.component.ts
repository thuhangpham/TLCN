import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Users, UserMess, ConvMess, MessageData, ConversationData } from '../../_models/index';
import { MessageService } from '../../_services/message.service';
import { MessSocketService } from '../../_socket/mess-socket.service';
import { ClickEventService } from '../../_services/click-event.service';
import { UsersService } from '../../_services/users.service';
import { VerifyService } from '../../_services/verify.service';
import { ListenerService } from '../../_services/listener.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @ViewChild('list') list: ElementRef;
  mess: String;
  dangNhapTinNhan: boolean = false;
  messList: MessageData[] = new Array();
  userList: UserMess[] = new Array();
  converMessList: ConvMess[] = new Array();
  loadMore: any = true;
  loadingUser: any = false;
  loading: any = false;
  user: Users = new Users();
  colorHis: any = 0;
  recipient: any = new Users();
  private conversationId: any;

  id: number;
  private sub: any;
  isActived: any = false;
  constructor(
    private messSocket: MessSocketService,
    private messageService: MessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clickEventService: ClickEventService,
    private userService: UsersService,
    private verifyService: VerifyService,
    private listenerService: ListenerService
  ) {
    this.getParamId();
    this.activatedRoute.params.subscribe(params => {
      // console.log('router '+params);
    });
    this.activatedRoute.data.subscribe(data => {
      // console.log('router '+data);
    })
  }
  verify() {
    this.verifyService.verify().then(res => {
      if (res.result === 1) {
        return true;
      }
      else return false;
    }).catch(err => { return false; });
  }
  ngOnInit() {
    if (localStorage.getItem('currentUser'))
      this.user = JSON.parse(localStorage.getItem('currentUser')).user;
    this.checkConversation();
    this.messListener();
  }
  getConversations() {
    this.loadingUser = true;
    this.messageService.getConversations(this.user._id).catch(err => {
      window.alert(err || 'Ann error has occured while load conversations!');
    })
      .then(data => {
        if (data.result == 1) {
          let conMessList = {
            message: MessageData
          };
          // // console.log('conversations ' + JSON.stringify(data));
          this.loadingUser = false;
          // this.converList = data[0].conversation;
          this.converMessList = data.data;
          this.converMessList.forEach((c, index) => {
            let um = new UserMess();
            um.conversation = c.conversation._id;
            um.lastMess = c.message;
            if (c.conversation.participants.length == 1) {
              um.user = c.conversation.participants[0];
              this.userList.push(um);
            }
            else
              c.conversation.participants.forEach((e, i) => {
                if (e._id != this.user._id) {
                  um.user = e;
                  this.userList.push(um);
                }
              });
          });
        }
        // // console.log('load conversation ' + JSON.stringify(data));
      });
  }
  getParamId() {
    // Get parent ActivatedRoute of this route.
    // this.activatedRoute.params
    // .switchMap((params: Params) => this.id = params['id']);

    // this.sub = this.activatedRoute.params.subscribe(params => {
    //   // this.id = +params['id']; // (+) converts string 'id' to a number
    //   this.id = params['id'];
    // });
    this.id = this.activatedRoute.pathFromRoot[1].snapshot.params['id'];
    this.userService.getUsersById(this.id).catch(err => {

    }).then(data => {
      this.recipient = data.data;
    });
    // console.log('get params ' + this.activatedRoute.pathFromRoot[1].snapshot.params['id']);
  }
  checkConversation() {
    if (this.user._id) {
      this.loading = true;
      var body = {
        recipient: this.id,
        _id: this.user._id
      };
      this.messageService.newConversation(body)
        .catch(err => {
          this.loading = false;
          window.alert(err || 'An error has occoured while load message!');
        })
        .then(data => {
          this.loading = false;
          // // console.log(data.data.messages);
          if (data.result == 1) {
            // // console.log(JSON.stringify(data));
            this.conversationId = data.data.conversation._id;
            this.messSocket.join(this.conversationId);
            if (data.data.messages)
              this.messList = data.data.messages;
            this.getConversations();
          }
          // // console.log(data);
        });
    }
    else {
      this.router.navigate(['/']);
    }

  }
  messListener() {
    this.messSocket.dangNhapTinNhan().subscribe(
      data => {
        //  // console.log(data);
        this.dangNhapTinNhan = true;
      },
      err => {

      }
    );
    this.messSocket.khongNhapTinNhan().subscribe(
      data => {
        //  // console.log(data);
        this.dangNhapTinNhan = false;
      },
      err => {

      }
    );
    this.messSocket.tinNhanMoi().subscribe(
      data => {
        // console.log('co tn nhan');
        //  // console.log(data);
        let m = new MessageData();
        m = JSON.parse(JSON.stringify(data));
        this.messList[this.messList.length] = m;
      },
      err => {

      }
    );
    this.listenerService.onNewMessage().subscribe((data: MessageData) => {
      // console.log('listener msg ',data);
      this.changeUser(data.author._id, data.conversationId);
      let f = false;
      this.userList.forEach((e, i) => {
        if (e.conversation == data.conversationId) {
          f = true;
          return;
        }
      });
      if (!f) {
        let um: UserMess = new UserMess();
        this.recipient = data.author;
        um.user = data.author;
        um.conversation = data.conversationId;
        this.userList[this.userList.length] = um;
      }

    });

  }
  valuechange() {
    if (this.mess.length) {
      if (this.mess.length < 2)
        this.messSocket.toiDangNhapTinNhan(this.conversationId);
    }
    else
      this.messSocket.toiKhongNhapTinNhan(this.conversationId);
  }
  send() {
    if (localStorage.getItem('currentUser')) {
      let m2Send = new MessageData();
      m2Send.author = this.user;
      m2Send.body = this.mess;
      m2Send.conversationId = this.conversationId;

      if (this.mess.length > 0) {
        this.messageService.sendReply(this.conversationId, this.mess, this.user._id);
        this.messSocket.guiTinNhan(m2Send);
        m2Send.receiver = this.recipient
        this.messSocket.aiDoGuiTinNhan(m2Send);
        this.mess = '';
        this.valuechange();
      }
    }
  }
  @HostListener("window:scroll", [])
  onScroll(): void {
    // console.log('scroll ne');
  }
  getConversation(_id) {
    this.loading = true;
    this.messageService.getConversation(_id).catch(err => {
      window.alert('An error has occured while load conversation!');
      // console.log(err);
      this.loading = false;
    })
      .then(data => {
        if (data.result == 1) {
          this.messList = data.data;
        }
        this.loading = false;
        // // console.log('load conversation '+JSON.stringify(data));
      });
  }
  keyDownFunction(event) {
    if (event.keyCode == 13) {
      //this.comment();
      this.send();
    }
  }
  changeFr(u, conv) {
    this.recipient = u;
    this.changeUser(u._id, conv);
  }
  changeUser(_id, conv) {
    this.messList = [];
    // // console.log(conv);
    this.clickEventService.click(_id + '');
    this.id = _id;
    this.messSocket.leave(this.conversationId);
    this.messSocket.join(conv);
    this.conversationId = conv;
    this.dangNhapTinNhan = false;
    this.mess = '';
    this.getConversation(conv);
  }
}
