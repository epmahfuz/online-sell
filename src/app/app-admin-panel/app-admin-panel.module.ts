import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/Product/product-list/product-list.component';
import { CategoryListComponent } from './components/Category/category-list/category-list.component';
import { AddCategoryComponent } from './components/Category/add-category/add-category.component';
import { AddProductComponent } from './components/Product/add-product/add-product.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MaterialModule } from '../app-shared/material.module';
import { AdminOrderComponent } from './components/Order/admin-order/admin-order.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: '', redirectTo: 'menu/category-list', pathMatch: 'full' },
  { path: 'menu/category-list', component: CategoryListComponent },
  { path: 'menu/add-category', component: AddCategoryComponent },
  { path: 'menu/product-list/:id', component: ProductListComponent },
  { path: 'menu/add-product/:id', component: AddProductComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'order', component: AdminOrderComponent },
]


@NgModule({
  declarations: [
    DashboardComponent,
    ProductListComponent,
    CategoryListComponent,
    AddCategoryComponent,
    AddProductComponent,
    LeftSidebarComponent,
    TopBarComponent,
    AdminOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [DashboardComponent]
})
export class AppAdminPanelModule { }
