import {Component, Input, OnInit} from '@angular/core';
import {ICart} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input()
  cart: ICart;

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  getDetails():void {
    this.router.navigate([this.cart.id],{

      relativeTo: this.activatedRoute

    })
  }
}
