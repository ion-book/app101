import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-user',
  templateUrl: 'my-user.html'
})
export class MyUserComponent {

  @Input() user;
  @Output() onContact = new EventEmitter();
  @Output() onCall = new EventEmitter();

  constructor() {
  }

  contact(){
    //funcionalidad
    console.log(this.user.name, 'contact');
    this.onContact.emit( this.user );
  }

  call(){
    console.log(this.user.name, 'call');
    this.onCall.emit( this.user );
  }

}
