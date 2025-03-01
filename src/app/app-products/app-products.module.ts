import { NgModule } from '@angular/core';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { RouterModule, Routes } from '@angular/router';
import { AppCoreModule } from '../app-core/app-core.module';
import { CategorySidebarComponent } from './components/category-sidebar/category-sidebar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HighlightedCategoryComponent } from './components/highlighted-category/highlighted-category.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MyAccountComponent } from '../app-my-section/components/my-account/my-account.component';
import { MaterialModule } from '../app-material/material.module';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; 

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'checkout', component: CheckoutComponent },
]

@NgModule({
  declarations: [
    AppHomeComponent,
    CategorySidebarComponent,
    ProductListComponent,
    CartDetailsComponent,
    HighlightedCategoryComponent,
    CheckoutComponent,
    MyAccountComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    AppCoreModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [CategorySidebarComponent, CartDetailsComponent]
})
export class AppProductsModule { }
