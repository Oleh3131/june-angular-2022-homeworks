import { Component, OnInit } from '@angular/core';

import {ICart} from "../../interfaces";
import {CartService} from "../../services";

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  carts: ICart[];

  constructor(private cartService:CartService) { }

  ngOnInit(): void {

    this.cartService.getAll().subscribe(value => this.carts = value);

  }

}
