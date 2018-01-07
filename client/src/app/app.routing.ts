import { Routes, RouterModule, CanActivate, CanActivateChild } from '@angular/router';
// Guard
import { AuthGuard } from './_guards/auth.guard';
import { LogedinGuard } from './_guards/logedin.guard';


import { HomeComponent } from './_pages/home/home.component';
import { LoginComponent } from './_pages/login/login.component';
import { SignupComponent } from './_pages/signup/signup.component';
import { ProfileComponent } from './_pages/profile/profile.component';
import { PostComponent } from './_pages/post/post.component';
import { InfoComponent } from './_pages/info/info.component';
import { ContactComponent } from './_pages/contact/contact.component';
import { AccountComponent } from './_pages/account/account.component';
import { AboutComponent } from './_pages/about/about.component';
import { SecurityComponent } from './_pages/security/security.component';
import { AccountApplyComponent } from './_pages/account-apply/account-apply.component';
import { AccountPostComponent } from './_pages/account-post/account-post.component';
import { UpdatePostComponent } from './_pages/update-post/update-post.component';
import { ProfileDetailComponent } from './_pages/profile-detail/profile-detail.component';
import { PostDetailComponent } from './_pages/post-detail/post-detail.component';
import { ForgotPassComponent } from './_pages/forgot-pass/forgot-pass.component';
import { MessageComponent } from './_pages/message/message.component';
import { ChatComponent } from './_pages/chat/chat.component';
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [LogedinGuard] },
    { path: '', component: HomeComponent,pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    {
        path: 'account', component: AccountComponent, canActivate:[AuthGuard], children: [
            { path: 'apply', component: AccountApplyComponent },
            { path: 'post', component: AccountPostComponent }
        ]
    },
    { path: 'home', component: HomeComponent, pathMatch: 'full'},
    {
        path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]
        , children: [
            { path: 'info', component: InfoComponent },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'security', component: SecurityComponent }
        ]
    },
    { path:'post/update/:id', component: UpdatePostComponent, canActivate: [AuthGuard] },
    { path: 'post', component: PostComponent, canActivate: [AuthGuard] },
    { path: 'account', component: AccountApplyComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: InfoComponent, canActivate: [AuthGuard] },
    { path: 'user_profile/:id', component: ProfileDetailComponent, canActivate: [AuthGuard] },
    { path: 'post_detail/:id', component: HomeComponent },
    { path: 'forgot_pass', component: ForgotPassComponent, canActivate:[LogedinGuard] },
    { path: 'message', component: MessageComponent, canActivate: [AuthGuard], children:[
        {path: ':id', component: ChatComponent, outlet:'outlets'}
    ] },
    { path: '**', redirectTo: '' }
]
export const routing = RouterModule.forRoot(appRoutes);
