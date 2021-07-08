import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;

  constructor(private router: Router, public cartService: CartService) {}

  ngOnInit() {}

  async showProductDetails(): Promise<any> {
    console.log(this.router, this.product.id);
    await this.router.navigate(['/tabs/tab1/details', this.product.id]);
  }

  orderNow() {
    console.log(this.product);
    this.cartService.addToCart(this.product);
  }
}
