import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CookieService } from 'ngx-cookie-service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
  {
    path: 'info',
    loadChildren: () => 
      import('../app-legal-info/app-legal-info.module').then(
        (module) => module.AppLegalInfoModule
      ),
    data: { isFullScreen: false, isPublic: false },
  },
  { 
    path: '**', 
    redirectTo: ''
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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [CookieService],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
