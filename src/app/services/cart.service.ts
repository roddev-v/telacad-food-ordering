import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { classToPlain, plainToClass } from 'class-transformer';
import { ProductModel } from '../models/product.model';

@Injectable()
export class CartService {
  cart: ProductModel[] = [];

  constructor(private fireStore: AngularFirestore) {}

  addToCart(product: ProductModel) {
    this.cart.push(product);
    console.log(this.cart);
    const payload = classToPlain(this.cart);
    this.fireStore
      .collection('cart')
      .doc('ordres')
      .set({ cart: payload }, { merge: true });
  }

  removeFromCart() {}

  async getCartProducts(): Promise<ProductModel> {
    const result = await this.fireStore
      .collection('cart')
      .doc('ordres')
      .ref.get();
    const cartProducts = await result.data();
    return plainToClass(ProductModel, cartProducts);
  }
}
