import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedMaterialComponentsModule } from '../shared-material-components/shared-material-components.module';

import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    FakeLogoComponent,
    BreadcrumbsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialComponentsModule,
    AppRoutingModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
