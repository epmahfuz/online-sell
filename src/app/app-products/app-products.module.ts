import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { RouterModule, Routes } from '@angular/router';
import {AppCoreModule} from '../app-core/app-core.module'; 
const routes: Routes = [
  { path: '', component: AppHomeComponent },
]

@NgModule({
  declarations: [
    AppHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppCoreModule
  ]
})
export class AppProductsModule { }
