import {Product} from './product';



export class CreateProduct {
  static readonly type = '[Product] createProduct';
  constructor(public payload: Product) {}
}

export class DeleteProduct {
  static readonly type = '[Product] deleteProduct';
  constructor(public product: Product) {}
}

export class UpdateProduct {
  static readonly type = '[Product] updateProduct';
  constructor(public product: Product) {}
}
