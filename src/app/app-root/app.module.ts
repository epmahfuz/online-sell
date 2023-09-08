import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => 
      import('../app-products/app-products.module').then(
        (module) => module.AppProductsModule
      ),
    data: { isFullScreen: false, isPublic: false },
  },
  {
    path: 'admin-panel',
    loadChildren: () => 
      import('../app-admin-panel/app-admin-panel.module').then(
        (module) => module.AppAdminPanelModule
      ),
    data: { isFullScreen: false, isPublic: false },
  },
  {
    path: 'my-section',
    loadChildren: () => 
      import('../app-my-section/app-my-section.module').then(
        (module) => module.AppMySectionModule
      ),
    data: { isFullScreen: false, isPublic: false },
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
      useHash: false,
    }),
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
