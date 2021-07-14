import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductModel } from '../models/product.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  products: ProductModel[] = [];
  name: any;

  constructor(
    private productsService: ProductsService,
    public angularAuth: AngularFireAuth,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.products = await this.productsService.get();

    this.angularAuth.authState.subscribe((auth) => {
      if (auth) {
        this.name = auth.email;
      }
    });
  }

  logoutUser() {
    this.angularAuth.signOut();
    this.router.navigate(['/login']);
  }
}
