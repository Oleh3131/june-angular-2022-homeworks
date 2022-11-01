import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IProduct} from "../interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<IProduct[]>{

    return this.httpClient.get<IProduct[]>(urls.products);

  }

  getById(id:number):Observable<IProduct>{

    return this.httpClient.get<IProduct>(`${urls.products}/${id}`);

  }
}
