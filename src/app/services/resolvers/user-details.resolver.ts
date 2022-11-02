import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {IUser} from "../../interfaces";
import {UserService} from "../user.service";

@Injectable({
  providedIn: 'root'
})
//Використовуємо resolver в тих випадках коли у нас дані з апі приходять із затримкою а в компоненті у нас є уже якийсь контент.
//То ми хочемо не показувати цілу компоненту і цей контент допоки дані з апі не підгрузяться з АПІ повністю.
//Навмисне в запитах сервісів робимо затримку а дві секунди.
export class UserDetailsResolver implements Resolve<IUser> {
  constructor(private userService:UserService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {

    const {id} = route.params;

    return this.userService.getById(id);
  }
}
