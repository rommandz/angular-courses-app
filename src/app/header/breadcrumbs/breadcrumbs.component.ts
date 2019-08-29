import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, distinctUntilChanged, switchMap, startWith, scan } from 'rxjs/operators';
import { ICourse } from '../../courses/course';
import { IBreadcrumbs } from './breadcrumbs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs$: Observable<IBreadcrumbs[]>;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.breadcrumbs$ = this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map((event: Event) => this.route.firstChild),
      switchMap((route: ActivatedRoute) => route.data.pipe(
        filter((data: { course: ICourse }) => !!data.course),
        map((data: { course: ICourse }) => ({ label: data.course.name })),
        startWith({ label: 'Courses', url: '/courses' }),
        scan((acc: IBreadcrumbs[], next: IBreadcrumbs) => {
          acc = [ ...acc, next ];

          return acc;
        }, [])
      ))
    );
  }

  getBreadcrumbLabel(label: string, isLast: boolean): string {
    return `${label} ${!isLast ? '/' : ''} `;
  }
}
