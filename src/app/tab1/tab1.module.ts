import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ProductsService } from '../services/products.service';
import { ProductComponent } from '../components/product/product.component';
import { CartService } from '../services/cart.service';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, Tab1PageRoutingModule],
  providers: [ProductsService, CartService],
  declarations: [Tab1Page, ProductComponent],
})
export class Tab1PageModule {}
