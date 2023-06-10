import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { RouterModule, Routes } from '@angular/router';
import {AppCoreModule} from '../app-core/app-core.module';
import { CategorySidebarComponent } from './components/category-sidebar/category-sidebar.component'; 
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { TopCarouselComponent } from './components/top-carousel/top-carousel.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HighlightedCategoryComponent } from './components/highlighted-category/highlighted-category.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'checkout', component: CheckoutComponent },
]

@NgModule({
  declarations: [
    AppHomeComponent,
    CategorySidebarComponent,
    TopCarouselComponent,
    ProductListComponent,
    CartDetailsComponent,
    HighlightedCategoryComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    FlexLayoutModule,
    NguCarouselModule,
    AppCoreModule
  ]
})
export class AppProductsModule { }
