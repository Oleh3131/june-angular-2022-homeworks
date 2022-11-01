import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../user/interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {IProduct} from "../../interfaces";
import {ProductService} from "../../services";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct;

  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id})=>{

      this.productService.getById(id).subscribe(value => this.product = value);

    })

  }

}
