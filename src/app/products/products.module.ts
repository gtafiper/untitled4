import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProducktComponent } from './product-add/add-produckt.component';
import {FormsModule} from '@angular/forms';
import {MatCardModule, MatIconModule} from '@angular/material';


@NgModule({
  declarations: [ProductsComponent, AddProducktComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    MatCardModule,
    MatIconModule
  ]
})
export class ProductsModule { }
