export const COURSES: any = [
  undefined,

  {
    id: 1,
    title: 'Angular core deep dive',
    price: 9.998766553,
    description:
      'A detailed walk-through of the most important part of Angular - the Core and Common modules',
    rate: 0.67,
    lessonsCount: 10,
  },
  {
    id: 2,
    title: 'RxJs In Practice Course',
    price: 9.998766553,
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
    description:
      'Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples',
    category: 'BEGINNER',
    rate: 0,
    lessonsCount: 10,
  },

  {
    id: 3,
    title: 'NgRx In Depth',
    price: 29.998766553,
    description:
      'Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
    rate: 0,
    category: 'ADVANCED',
  },

  {
    id: 4,
    title: 'Angular for Beginners',
    price: 9.998766553,
    iconUrl:
      'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
    description:
      "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
    category: 'BEGINNER',
    rate: 0,
    lessonsCount: 10,
  },
  {
    id: 5,
    title: 'Angular Security Course',
    price: 29.998766553,
    description:
      'Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
    category: 'ADVANCED',
    rate: 0,
    lessonsCount: 11,
  },
  {
    id: 6,
    title: 'Angular PWA Course',
    price: 19.998766553,
    description:
      'Learn Angular Progressive Web Applications, build the future of the Web Today.',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
    category: 'INTERMEDIATE',
    rate: 0,
    lessonsCount: 8,
  },
  {
    id: 7,
    title: 'Angular Advanced Course',
    price: 29.998766553,
    description:
      'Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm',
    iconUrl:
      'https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png',
    category: 'ADVANCED',
    rate: 0,
  },
  {
    id: 8,
    title: 'Complete Typescript Course',
    price: 9.998766553,
    description:
      'Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.',
    iconUrl:
      'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png',
    category: 'BEGINNER',
    rate: 0,
  },
  {
    id: 9,
    title: 'Angular Architecture Course',
    price: 19.998766553,
    description:
      'Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png',
    category: 'INTERMEDIATE',
    rate: 0,
  },
  {
    id: 10,
    title: 'Angular Material Course',
    price: 29.998766553,
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png',
    description: 'Build Applications with the official Angular Widget Library',
    category: 'ADVANCED',
    rate: 0,
  },
];

export function findCourseById(courseId: number) {
  return COURSES.find((course) => course.id === courseId);
}
