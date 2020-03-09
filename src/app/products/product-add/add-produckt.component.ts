import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../Shared/product';


@Component({
  selector: 'app-add-produckt',
  templateUrl: './add-produckt.component.html',
  styleUrls: ['./add-produckt.component.css']
})
export class AddProducktComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0,
    description: '',
    url: '',
};
  constructor(private ps: ProductService) { }

  ngOnInit() {
  }

  onSubmit() {
  if (this.product.name !== '' && this.product.price !== null ) {
    this.ps.addProduct(this.product);
    this.product.name = '';
    this.product.price = null;
    this.product.description = '';
    this.product.url = '';
  }
  }
}
