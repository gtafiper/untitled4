import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {Observable} from 'rxjs';
import {Product} from './Shared/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
Products$: Observable<Product[]>;
editState = false;
itemToEdit: Product;
  constructor(private ps: ProductService, private router: Router) { }

  ngOnInit() {
  this.Products$ = this.ps.getProducts();
  }

  editItem(event, product) {
    this.editState = true;
    this.itemToEdit = product;

  }

  deleteItem(event, product: Product) {
    this.clearState();
    this.ps.deleteItem(product);
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

  updateProdukt(product) {
    this.ps.updateProduct(product);
    this.clearState();
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
