import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  productId: number;
  product: ProductModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) {
    const snapshot = activatedRoute.snapshot;
    const { id } = snapshot.params;
    this.productId = +id;
    console.log(this.productId);
  }

  async ngOnInit(): Promise<any> {
    const result = await this.productService.getOne(this.productId);
    this.product = result;
    console.log(this.product);
  }
}
