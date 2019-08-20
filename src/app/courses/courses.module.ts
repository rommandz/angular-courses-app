import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedMaterialComponentsModule } from '../shared-material-components/shared-material-components.module';

import { CoursesPageComponent } from './courses-page/courses-page.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CoursePlateBorderDirective } from './course-plate-border/course-plate-border.directive';
import { DurationPipe } from './duration/duration.pipe';
import { FilterCoursesPipe } from './filter-courses/filter-courses.pipe';
import { OrderByPipe } from './order-by/order-by.pipe';


@NgModule({
  declarations: [
    CoursesPageComponent,
    BreadcrumbsComponent,
    SearchSectionComponent,
    CourseItemComponent,
    CoursePlateBorderDirective,
    DurationPipe,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedMaterialComponentsModule,
  ],
  providers: [FilterCoursesPipe],
  exports: [CoursesPageComponent]
})
export class CoursesModule { }
