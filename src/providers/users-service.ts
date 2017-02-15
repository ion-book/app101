import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(public http: Http) {
    console.log('Hello UsersService Provider');
  }

  getUsers(){
    return this.http.get('assets/json/users.json')
    .map(response => response.json());
  }

  createUser(){
    
  }

}
