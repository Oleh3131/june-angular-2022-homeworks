import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IProduct} from "../../interfaces";
import {ProductsService} from "../../services";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private productsService:ProductsService) {

    this.activatedRoute.params.subscribe(({id}) => {

       this.product = this.router.getCurrentNavigation()?.extras.state?.['product'];

       if(!this.product){

         this.productsService.getById(id).subscribe(value => this.product = value);

       }
    })
  }

  ngOnInit(): void {
  }

}
