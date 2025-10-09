interface WorkExperience {
  company: string;
  link: string;
  logoPath: string;
  duration: string;
  position: string;
  technologies: string[];
  projectsDescription: string[];
  responsibilities: string[];
  reasonForLeaving?: string;
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Monster Lead Group',
    link: 'https://www.monsterleadgroup.com/',
    logoPath: 'loan-sure-logo-dark.png',
    duration: 'from May 2021 to the present',
    position: 'Front-End (Tech Lead)',
    technologies: [
      'Angular 20',
      'Angular-cli',
      'Signals',
      'RxJs',
      'NGXS',
      'Angular Material',
      'FxLayout',
      'Ag-Grid',
      'Storybook',
      'Jest'
    ],
    projectsDescription: [
      'MLG offers mail-order marketing services in the United States. Our team was engaged in the transfer of this business to online services.',
      'This application is for clients who want to order mailing letters, it allows you to select templates, fill in data, select leads for mailing, calculate cost, terms.'
    ],
    responsibilities: [
      'Architecture development of front-end applications and libraries',
      'Components and modules development',
      'Code review, mentoring'
    ],
  },
  {
    company: 'iBuilt',
    link: 'https://ibuilt.com/',
    logoPath: 'ibuilt.svg',
    duration: 'from September 2019 to May 2021',
    position: 'Full-Stack JavaScript Developer',
    technologies: [
      'JS ES6',
      'Angular 11',
      'RxJs',
      'Angular Material',
      'Angular-cli',
      'FxLayout',
      'Storybook',
      'Jasmine & Karma',
      'NestJs',
      'MongoDB'
    ],
    projectsDescription: [
      // 'iBUILT is a construction company based in NY city.',
      // 'We developed 2 internal products — DTP and GDS.',
      'DTP or Digital Twin Platform is a platform for management buildings such as residential complexes or hotels. The building owner has a digitized version of his property and can control and maintain its lifetime circle.',
      'GDS or Generative Design System is a SaaS that made it possible, according to the specified parameters, to generate a fully-featured building layout in Revit format for further construction.'
    ],
    responsibilities: [
      'Development of front-end and back-end for internal platforms',
      'Development of a library for interacting with 3d models',
      'Development of a microservice for calculating costs and benefits from proposed buildings'
    ],
    reasonForLeaving: 'The company stopped the development of the application.'
  },
  {
    company: 'Booking Health GmbH',
    link: 'https://bookinghealth.com/',
    logoPath: 'booking-health.webp',
    duration: 'from October 2018 to August 2019',
    position: 'Front-End Developer',
    technologies: [
      'JS ES6',
      'Angular 10',
      'RxJs',
      'Bootstrap',
      'Angular-cli',
      'GraphQL',
      'NodeJs',
      'NestJs',
      'AWS S3',
      'MongoDB'
    ],
    projectsDescription: [
      // 'Booking Health is a medical company based in Germany.',
      'It is a platform for registering users from different countries for medical examinations.',
      'In this system, users could then see the examination results such as MRT, X-ray, etc.'
    ],
    responsibilities: [
      'Architecture development of front-end applications',
      'Development of the file manager library',
      'File manager API development with NodeJs',
      'Development of a library for viewing X-RAY and MRI'
    ],
    reasonForLeaving: 'The project was released.'
  },
  {
    company: 'Attract Group',
    link: 'https://attractgroup.com/',
    logoPath: 'attract-group.svg',
    duration: 'from December 2015 to October 2018',
    position: 'Front-End Developer',
    technologies: [
      'HTML',
      'CSS (LESS, SCSS)',
      'JavaScript (jQuery)',
      'Gulp',
      'Webpack',
      'AngularJs',
      'Angular2+',
      'TypeScript',
      'Electron',
      'Node.Js',
      'Wordpress',
      'Docker',
      'Jenkins'
    ],
    projectsDescription: [
      // 'Predominantly closed crm systems',
      'Task management system, the project was used by the company (similar to Jira) (Angular)',
      'Monolithic applications (HTML, CSS, JS + Laravel or Wordpress on the backend)',
      'Bots traders (working with cryptocurrency) (Node.Js + TypeScript)'
    ],
    responsibilities: [
      'Layout of templates from PSD and other editors',
      'Development front-end applications on Angular',
      'Development microservices with NodeJs'
    ],
    reasonForLeaving: 'Another company offered more favorable terms.'
  },
  {
    company: 'EXSY',
    link: '',
    logoPath: 'default-placeholder.svg',
    duration: 'from August 2014 to December 2015',
    position: 'HTML/CSS Developer',
    technologies: [
      'HTML',
      'CSS (LESS)',
      'JavaScript (jQuery)'
    ],
    projectsDescription: [
      'There were many projects (about 30), I can not single out any projects'
    ],
    responsibilities: [
      'Layout of templates from PSD and other editors'
    ],
    reasonForLeaving: 'Too many similar projects'
  }
];
