import { State, Action, StateContext, Selector } from '@ngxs/store';
import {Product} from './product';
import {ProductService} from '../../services/product.service';
import {CreateProduct} from './product.action';

export class ProductStateModel {

  products: Product[];



}


@State<ProductStateModel>({
  name: 'products',
  defaults: {
    products: []
  }
})


// tslint:disable-next-line:class-name
export class ProductState {

  constructor(private productService: ProductService) {
  }

  @Selector()
  static getProducts(state: ProductStateModel) {
    return state.products;
  }

  @Action(CreateProduct)
  add({getState, patchState}: StateContext<ProductStateModel>, {payload}: CreateProduct){
   const state = getState();
   patchState({
     products: [...state.products, payload]
   });
  }

}



