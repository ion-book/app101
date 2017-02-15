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
      name: 'Ivan',
      bio: 'Python developer'
    },
    {
      name: 'John',
      bio: 'Php developer'
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  goToUserDetailPage(){
    this.navCtrl.push( UserDetailPage );
  }

  clickedContact(user){
    console.log(user);
  }


  clickedCall(user){
    console.log(user);
  }

}
