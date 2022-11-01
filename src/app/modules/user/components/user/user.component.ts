import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  @Output()
  userDetails=new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  getDetails() {
    this.userDetails.emit(this.user);
  }
}
