import { NgModule } from '@angular/core';
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
import { RoleGuard } from '../app-shared/services/role.guard';
import { EditCategoryComponent } from './components/Category/edit-category/edit-category.component';
import { EditProductComponent } from './components/Product/edit-product/edit-product.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'menu/category-list', 
    pathMatch: 'full', 
    canActivate: [RoleGuard], 
    data: { expectedRole: 'admin' } 
  },
  { path: 'menu/category-list', 
    component: CategoryListComponent , 
    canActivate: [RoleGuard], 
    data: { expectedRole: 'admin' } 
  },
  { 
    path: 'menu/add-category', 
    component: AddCategoryComponent , 
    canActivate: [RoleGuard], 
    data: { expectedRole: 'admin' } 
  },
  { 
    path: 'menu/edit-category/:id', 
    component: EditCategoryComponent , 
    canActivate: [RoleGuard], 
    data: { expectedRole: 'admin' } 
  },
  { 
    path: 'menu/product-list/:id', 
    component: ProductListComponent , 
    canActivate: [RoleGuard], 
    data: { expectedRole: 'admin' } 
  },
  { 
    path: 'menu/add-product/:id', 
    component: AddProductComponent , 
    canActivate: [RoleGuard], 
    data: { expectedRole: 'admin' } 
  },
  { 
    path: 'menu/edit-product/:id', 
    component: EditProductComponent , 
    canActivate: [RoleGuard], 
    data: { expectedRole: 'admin' } 
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent , 
    canActivate: [RoleGuard], 
    data: { expectedRole: 'admin' } 
  },
  { 
    path: 'order', 
    component: AdminOrderComponent , 
    canActivate: [RoleGuard], 
    data: { expectedRole: 'admin' } 
  },
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
    DecisionModalComponent,
    EditCategoryComponent,
    EditProductComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
  ],
  exports: [DashboardComponent],
  entryComponents:[DecisionModalComponent]
})
export class AppAdminPanelModule { }
