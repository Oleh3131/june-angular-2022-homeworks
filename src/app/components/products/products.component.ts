import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services";
import {IProduct} from "../../interfaces";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {

    this.productsService.getAll().subscribe(value => this.products = value);

  }
}
