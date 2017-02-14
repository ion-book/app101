import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-user',
  templateUrl: 'my-user.html'
})
export class MyUserComponent {

  @Input() user;
  @Output() onSave = new EventEmitter();

  constructor() {}

  save(){
    console.log('save', this.user.name);
    this.onSave.emit( this.user );
  }

}
