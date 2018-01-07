import { BrowserModule, Title } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppMaterialModule } from './app.material';
import {
  FormsModule, ReactiveFormsModule
} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

// Service
import {
  UsersService,
  AlertService,
  LocationService,
  AuthenService
} from './_services/index';

import { EmailService } from './_services/email.service';
import { EmploySituationService } from './_services/employ-situation.service';
import { AreaExperService } from './_services/area-exper.service';
import { VerifyService } from './_services/verify.service';
import { PostService } from './_services/post.service';
import { ReplyService } from './_services/reply.service';
import { AddReplyListenerService } from './_services/add-reply-listener.service';
import { MessSocketService } from './_socket/mess-socket.service';

import { SocketService } from './_socket/socket.service';
import { ApplySocketService } from './_socket/apply-socket.service';
import { CommentSocketService } from './_socket/comment-socket.service';
import { CommentService } from './_services/comment.service';
import { MessageService } from './_services/message.service';
import { ClickEventService } from './_services/click-event.service';
//
// component

import { LoginComponent } from './_pages/login/login.component';
import { SignupComponent } from './_pages/signup/signup.component';
import { HomeComponent } from './_pages/home/home.component';
import { routing } from './app.routing';
import { AlertComponent } from './_directives/alert/alert.component';
import { ProfileComponent } from './_pages/profile/profile.component';
import { HeaderComponent } from './_pages/header/header.component';
import { FooterComponent } from './_pages/footer/footer.component';
import { PostComponent } from './_pages/post/post.component';
import { InfoComponent } from './_pages/info/info.component';
import { AboutComponent } from './_pages/about/about.component';
import { ContactComponent } from './_pages/contact/contact.component';
import { AccountComponent } from './_pages/account/account.component';
import { SecurityComponent } from './_pages/security/security.component';
import { HomeCenterComponent } from './_pages/home-center/home-center.component';
import { CommentComponent } from './_pages/comment/comment.component';
import { ItemCommentComponent } from './_pages/item-comment/item-comment.component';
import { ReplyComponent } from './_pages/reply/reply.component';
import { DropdownDirective } from './_directives/drobdown/dropdown.directive';
import { AccountApplyComponent } from './_pages/account-apply/account-apply.component';
import { AccountPostComponent } from './_pages/account-post/account-post.component';
import { AppComponent } from './app.component';
import { ApplyItemComponent } from './_pages/apply-item/apply-item.component';
import { AccountPostItemComponent } from './_pages/account-post-item/account-post-item.component';
import { UpdatePostComponent } from './_pages/update-post/update-post.component';
import { FacebookModule } from 'ngx-facebook';
// Guard
import { LogedinGuard } from './_guards/logedin.guard';
import { AuthGuard} from './_guards/auth.guard';
import { ProfileDetailComponent } from './_pages/profile-detail/profile-detail.component';
import { PostDetailComponent } from './_pages/post-detail/post-detail.component';
import { ForgotPassComponent } from './_pages/forgot-pass/forgot-pass.component';
import { MessageComponent } from './_pages/message/message.component';
import { MessItemComponent } from './_pages/mess-item/mess-item.component';
import { ItemHistoryComponent } from './_pages/item-history/item-history.component';
import { ChatComponent } from './_pages/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AlertComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent,
    InfoComponent,
    AboutComponent,
    ContactComponent,
    AccountComponent,
    SecurityComponent,
    HomeCenterComponent,
    CommentComponent,
    ItemCommentComponent,
    ReplyComponent,
    DropdownDirective,
    AccountApplyComponent,
    AccountPostComponent,
    ApplyItemComponent,
    AccountPostItemComponent,
    UpdatePostComponent,
    ProfileDetailComponent,
    PostDetailComponent,
    ForgotPassComponent,
    MessageComponent,
    MessItemComponent,
    ItemHistoryComponent,
    ChatComponent
  ],
  imports: [
    FacebookModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpModule,
    FormsModule,
    RouterModule,
    AppMaterialModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDY8UvTl6TiF0W_NB7ycIj-feAfVbmftOs',
      libraries: ['places']
    }),
  ],
  providers: [
    AuthGuard,
    AlertService,
    LocationService,
    EmploySituationService,
    AreaExperService,
    AuthenService,
    VerifyService,
    SecurityComponent,
    AuthGuard,
    PostService,
    Title,
    InfoComponent,
    AccountComponent,
    AboutComponent,
    ContactComponent,
    AccountApplyComponent,
    AccountPostComponent,
    UsersService,
    SocketService,
    ApplySocketService,
    CommentSocketService,
    CommentService,
    ReplyService,
    LogedinGuard,
    AddReplyListenerService,
    EmailService,
    MessageService,
    MessSocketService,
    ChatComponent,
    ClickEventService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
