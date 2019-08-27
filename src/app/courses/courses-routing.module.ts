import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AuthGuard } from '../guards/auth.guard';
import { EditCourseResolverService } from './edit-course-resolver.service';


const routes: Routes = [
  {
    path: 'courses',
    component: CoursesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/new',
    component: EditCourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/:id',
    component: EditCourseComponent,
    canActivate: [AuthGuard],
    resolve: { course: EditCourseResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
