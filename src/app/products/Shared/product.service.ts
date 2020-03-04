import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Product} from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Observable<Product[]>;
  productsCollection: AngularFirestoreCollection<Product>;
  itemDoc: AngularFirestoreDocument<Product>;

  constructor(private fs: AngularFirestore) {
    this.productsCollection = this.fs.collection('products', ref => ref.orderBy('name', 'asc'));


    this.products = this.productsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getProducts(): Observable<Product[]> {
    return this.products;
  }

  addProduct(product: Product) {
    console.log(product);
    this.productsCollection.add(product);

  }

  deleteItem(item: Product) {
    this.itemDoc = this.fs.doc(`products/${item.id}`);
    this.itemDoc.delete();
  }

  updateProduct(product: Product) {
    this.itemDoc = this.fs.doc(`products/${product.id}`);
    this.itemDoc.update(product);
  }
}
