import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {ProductModel} from '../models/product.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  products: ProductModel[] = [];

  constructor(private productsService: ProductsService) {}

  async ngOnInit(): Promise<void> {
    this.products = await this.productsService.get();
  }

}
