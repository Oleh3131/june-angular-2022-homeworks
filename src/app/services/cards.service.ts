import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICard} from "../interfaces";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ICard[]>{

    return this.httpClient.get<ICard[]>(urls.carts);

  }

  getById(id:number):Observable<ICard>{

    return this.httpClient.get<ICard>(`${urls.carts}/${id}`);

  }
}
