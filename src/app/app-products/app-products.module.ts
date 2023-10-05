import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { RouterModule, Routes } from '@angular/router';
import {AppCoreModule} from '../app-core/app-core.module';
import { CategorySidebarComponent } from './components/category-sidebar/category-sidebar.component'; 
import { NguCarouselModule } from '@ngu/carousel';
import { TopCarouselComponent } from './components/top-carousel/top-carousel.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HighlightedCategoryComponent } from './components/highlighted-category/highlighted-category.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MyAccountComponent } from '../app-my-section/components/my-account/my-account.component';
import { MaterialModule } from '../app-shared/material.module';
import { CommonFooterComponent } from './components/common-footer/common-footer.component';

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
    CheckoutComponent,
    MyAccountComponent,
    CommonFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NguCarouselModule,
    AppCoreModule,
    MaterialModule
  ]
})
export class AppProductsModule { }
