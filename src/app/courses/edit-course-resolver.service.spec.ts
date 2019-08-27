import { TestBed } from '@angular/core/testing';

import { EditCourseResolverService } from './edit-course-resolver.service';

describe('EditCourseResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditCourseResolverService = TestBed.get(EditCourseResolverService);
    expect(service).toBeTruthy();
  });
});
