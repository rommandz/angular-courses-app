import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { SharedMaterialComponentsModule } from './shared-material-components/shared-material-components.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CoursePlateBorderDirective } from './course-plate-border.directive';
import { DurationPipe } from './duration.pipe';
import { FilterCoursesPipe } from './filter-courses.pipe';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FakeLogoComponent,
    CoursesPageComponent,
    BreadcrumbsComponent,
    SearchSectionComponent,
    CourseItemComponent,
    CoursePlateBorderDirective,
    DurationPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedMaterialComponentsModule
  ],
  providers: [
    FilterCoursesPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
