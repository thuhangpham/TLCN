import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { MessageData } from './_models/message';
import { MessSocketService } from './_socket/mess-socket.service';
import { ListenerService } from './_services/listener.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Toast, ToasterService, ToasterConfig } from 'angular2-toaster';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  _id: any;
  private toasterService: ToasterService;
  public toasterconfig : ToasterConfig = 
  new ToasterConfig(
    {
      animation: 'fade',
      timeout: 3500
    }
  );
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private platform: PlatformLocation
    , private messService: MessSocketService,
    private listenerService: ListenerService,
    toasterService: ToasterService) {

    this.toasterService = toasterService;

    this.platform.onPopState(() => {
      window.location.reload();
    });

    this.listenerService.onListener().subscribe(
      data => {
        this.messService.join(data);
      }
    );

    this.messService.coTinNhan().
      subscribe((data: MessageData) => {
        if (!this._id) {
            this.popToast(data);
        }else{
          if(this._id != JSON.parse(JSON.stringify(data)).author._id)
            this.popToast(data);
        }
      });
  }
  ngOnInit() {
    this.getParams();
  }
  getParams() {
    if (window.location.pathname.indexOf('message') > 0) {
      this._id = window.location.pathname.split('=')[1];
      // console.log(window.location.pathname.split('=')[1]);
    }
    // console.log(window.location.pathname);
    // console.log('this.route.url ' + this.router.url);
  }
  popToast(m: MessageData) {
    // console.log(m);
    var toast: Toast = {
      type: 'info',
      title: m.author.info.full_name + '',
      body: m.body + '',
      showCloseButton: true,
      clickHandler: (t, isClosed): boolean => {
        
        // got clicked and it was NOT the close button!
        if (!isClosed) {
          this.listenerService.newMessage(m);
          this.router.navigate(['/message', { id: m.author._id }]);
        }
        return true; // remove this toast !
      }
    };
    this.toasterService.pop(toast);
  }
}