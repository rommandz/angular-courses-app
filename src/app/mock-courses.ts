import { Course } from './course';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Video course 1',
    creationDate: new Date(1566138072749),
    duration: 377,
    description:
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptas animi corporis quos ipsum explica
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptas animi corporis quos ipsum explica
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptas animi corporis quos ipsum explica`,
      topRated: false
  },
  {
    id: '2',
    title: 'Video course 2',
    creationDate: new Date(566138072749),
    duration: 120,
    description:
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptas animi corporis quos ipsum explica
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptas animi corporis quos ipsum explica
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptas animi corporis quos ipsum explica`,
      topRated: true
  },
  {
    id: '3',
    title: 'Video course 3',
    creationDate: new Date(1566709244040),
    duration: 59,
    description:
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptas animi corporis quos ipsum explica
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptas animi corporis quos ipsum explica
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptas animi corporis quos ipsum explica`,
      topRated: false
  }
];
