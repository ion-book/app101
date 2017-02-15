import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserDetailPage } from '../user-detail/user-detail';
import { UsersService } from '../../providers/users-service';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  users = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UsersService
  ) {}

  ionViewDidLoad() {
    this.userService.getUsers()
    .subscribe(data => {
      this.users = data;
    })
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
