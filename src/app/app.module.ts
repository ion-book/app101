import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    BrowserModule,
    HttpModule,
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
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersService
  ]
})
export class AppModule {}
