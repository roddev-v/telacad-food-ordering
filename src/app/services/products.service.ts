import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from '../models/product.model';
import {plainToClass} from 'class-transformer';
import {environment} from '../../environments/environment';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  async get(): Promise<ProductModel[]> {
    const res = await this.http.get(environment.apiURL).toPromise();
    return plainToClass(ProductModel, res as Array<any>);
  }
}
