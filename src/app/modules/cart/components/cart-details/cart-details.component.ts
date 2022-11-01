import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CartService} from "../../services";
import {ICart} from "../../interfaces";

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  @Input()
  cart: ICart;

  constructor(private activatedRoute:ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id})=>{

      this.cartService.getById(id).subscribe(value => this.cart = value);

    })

  }

}
