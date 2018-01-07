import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VerifyService } from '../../_services/verify.service';
import { Router } from '@angular/router';
import { Tab } from '../../_models/tab';

import { AccountApplyComponent } from '../../_pages/account-apply/account-apply.component';
import { AccountPostComponent } from '../../_pages/account-post/account-post.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  tabs: Tab[];

  constructor(
    private verifyService: VerifyService,
    private router: Router,
    private titleService: Title,
    private accountPost: AccountPostComponent,
    private accountApply: AccountApplyComponent) { }

  ngOnInit() {
    this.tabs = [new Tab(0, 'Applies', 'apply', this.accountApply)
    , new Tab(1, 'Posts', 'post', this.accountPost)];
  this.tabs.forEach(t => {
    t.active = false;
    if (window.location.pathname === '/account/' + t.link || this.router.url === '/account/' + t.link)
      t.active = true;
  });
  }
  tabClick(tab: Tab) {
    this.tabs.forEach(t => {
      t.active = false;
    });
    tab.active = true;
  }

}
