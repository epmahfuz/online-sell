import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MaterialModule } from '../app-shared/material.module';

const routes: Routes = [
  { path: '', component: CategoryListComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'dashboard', component: DashboardComponent },
]


@NgModule({
  declarations: [
    DashboardComponent,
    ProductListComponent,
    CategoryListComponent,
    AddCategoryComponent,
    AddProductComponent,
    LeftSidebarComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  exports: [DashboardComponent]
})
export class AppAdminPanelModule { }
