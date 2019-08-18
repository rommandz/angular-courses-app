import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchSectionComponent } from './search-section/search-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FakeLogoComponent,
    CoursesPageComponent,
    BreadcrumbsComponent,
    SearchSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
