import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {
    name: 'Nicolas',
    bio: 'Desarrollador apps'
  }

  constructor(public navCtrl: NavController) {
    
  }

  goToUsersPage(){
    this.navCtrl.push( UsersPage );
  }

}
