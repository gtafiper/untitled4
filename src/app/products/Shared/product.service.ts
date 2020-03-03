import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {AngularFirestore} from '@angular/fire/firestore';
import {Product} from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private fs: AngularFirestore) { }

  getProducts(): Observable<Product[]> {
   return this.fs.collection<Product>('products').valueChanges();

  }
}
