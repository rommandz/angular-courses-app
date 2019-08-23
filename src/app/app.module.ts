import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { SharedMaterialComponentsModule } from './shared-material-components/shared-material-components.module';
import { CoursesModule } from './courses/courses.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FakeLogoComponent,
    BreadcrumbsComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedMaterialComponentsModule,
    CoursesModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
