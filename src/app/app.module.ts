import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { UserDetailPage } from '../pages/user-detail/user-detail';

import { MyUserComponent } from '../components/my-user/my-user';
import { MyHighlightDirective } from '../components/my-highlight/my-highlight';
import { ReversePipe } from '../pipes/reverse';

import { UsersService } from '../providers/users-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    UserDetailPage,
    MyUserComponent,
    MyHighlightDirective,
    ReversePipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    UserDetailPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersService
  ]
})
export class AppModule {}
