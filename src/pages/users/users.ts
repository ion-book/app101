import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserDetailPage } from '../user-detail/user-detail';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  users = [
    {
      name: 'Kattya',
      bio: 'Ruby developer'
    },
    {
      name: 'Nicolas',
      bio: 'Web developer'
    },
    {
      name: 'John',
      bio: 'python developer'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  goToUserDetailPage(){
    this.navCtrl.push( UserDetailPage );
  }

  clickedUser( user ){
    console.log(user);
  }

}
