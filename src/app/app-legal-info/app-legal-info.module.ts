import { NgModule } from '@angular/core';
import { LegalInfoContainerComponent } from './components/legal-info-container/legal-info-container.component';
import { TermsAndConditionRouteComponent } from './components/terms-and-condition-route/terms-and-condition-route.component';
import { TermsAndConditionComponent } from './components/terms-and-condition/terms-and-condition.component';
import { PrivacyPolicyRouteComponent } from './components/privacy-policy-route/privacy-policy-route.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RouterModule, Routes } from '@angular/router';
import { AppCoreModule } from '../app-core/app-core.module';
import { AppProductsModule } from '../app-products/app-products.module';
import { MaterialModule } from '../app-material/material.module';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'privacy-policy',
    pathMatch: 'full'
  },
  { path: 'terms-and-condition', 
    component: TermsAndConditionRouteComponent
  },
  { path: 'privacy-policy', 
    component: PrivacyPolicyRouteComponent
  }
];

@NgModule({
  declarations: [
    LegalInfoContainerComponent,
    TermsAndConditionRouteComponent,
    TermsAndConditionComponent,
    PrivacyPolicyRouteComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule, 
    AppCoreModule,
    AppProductsModule,
 
  ]
})
export class AppLegalInfoModule { }
