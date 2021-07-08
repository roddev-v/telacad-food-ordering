import { Component, OnInit } from '@angular/core';
import { classToPlain } from 'class-transformer';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  constructor(public cartService: CartService) {}

  async ngOnInit(): Promise<void> {
    const product = await this.cartService.getCartProducts();

    console.log(product);

    //this.cartService.cart = [...this.cartService.cart, product];
  }
}
