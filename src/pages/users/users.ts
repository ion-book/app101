import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserDetailPage } from '../user-detail/user-detail';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  goToUserDetailPage(){
    this.navCtrl.push( UserDetailPage );
  }

}
