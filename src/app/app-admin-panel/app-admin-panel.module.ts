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
import { MaterialModule } from '../app-material/material.module';
import { AdminOrderComponent } from './components/Order/admin-order/admin-order.component';
import { DecisionModalComponent } from './components/decision-modal/decision-modal.component';

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
    AdminOrderComponent,
    DecisionModalComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
  ],
  exports: [DashboardComponent],
  entryComponents:[DecisionModalComponent]
})
export class AppAdminPanelModule { }
