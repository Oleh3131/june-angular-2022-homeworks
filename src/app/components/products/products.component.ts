import { Component, OnInit } from '@angular/core';

import {IProduct} from "../../interfaces";
import {ProductService} from "../../services";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.productService.getAll().subscribe(value => this.products = value);

  }

}
