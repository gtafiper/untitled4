import { Component, OnInit } from '@angular/core';
import {ProductService} from './Shared/product.service';
import {Observable} from 'rxjs';
import {Product} from './Shared/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
Products$: Observable<Product[]>
  constructor(private ps: ProductService) { }

  ngOnInit() {
  this.Products$ = this.ps.getProducts();
  }

}
