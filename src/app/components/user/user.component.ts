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

  //Створюємо змінну за допомогою якої ми зможемо передати нашого user назовні в батьківську компоненту users
  //@Output відповідає за те щоб ми могли віддати щось наверх (протилежний @Input())

  @Output()
  userLift = new EventEmitter<IUser>();

  constructor() {
  }

  ngOnInit(): void {
  }

  lift(): void {
    this.userLift.emit(this.user);
  }
}
