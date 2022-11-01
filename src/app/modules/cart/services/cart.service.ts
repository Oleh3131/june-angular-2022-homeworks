import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICart} from "../interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ICart[]>{

    return this.httpClient.get<ICart[]>(urls.carts);

  }

  getById(id:number):Observable<ICart>{

    return this.httpClient.get<ICart>(`${urls.carts}/${id}`);

  }
}
