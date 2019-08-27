import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedMaterialComponentsModule } from '../shared-material-components/shared-material-components.module';
import { CoursesRoutingModule } from './courses-routing.module';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CoursePlateBorderDirective } from './course-plate-border/course-plate-border.directive';
import { DurationPipe } from './duration/duration.pipe';
import { FilterCoursesPipe } from './filter-courses/filter-courses.pipe';
import { OrderByPipe } from './order-by/order-by.pipe';
import { DeleteCourseDialogComponent } from './delete-course-dialog/delete-course-dialog.component';
import { EditCourseComponent } from './edit-course/edit-course.component';


@NgModule({
  declarations: [
    CoursesListComponent,
    SearchSectionComponent,
    CourseItemComponent,
    CoursePlateBorderDirective,
    DurationPipe,
    OrderByPipe,
    FilterCoursesPipe,
    DeleteCourseDialogComponent,
    EditCourseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedMaterialComponentsModule,
    CoursesRoutingModule
  ],
  providers: [FilterCoursesPipe],
  entryComponents: [DeleteCourseDialogComponent],
  exports: [CoursesListComponent]
})
export class CoursesModule { }
