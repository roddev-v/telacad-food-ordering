import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product.model';
import { plainToClass } from 'class-transformer';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ProductsService {
  constructor(private fireStore: AngularFirestore) {}

  async get(): Promise<ProductModel[]> {
    const res = await this.fireStore
      .collection('restaurant')
      .doc('menu')
      .ref.get();
    const items = res.data().items;
    //console.log(res.data()['items']);
    return plainToClass(ProductModel, items as ProductModel[]);
  }
}
