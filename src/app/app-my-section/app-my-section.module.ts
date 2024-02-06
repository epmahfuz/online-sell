import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MaterialModule } from '../app-material/material.module';

const routes: Routes = [
  { path: 'profile', component: MyAccountComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class AppMySectionModule { }
