import { v4 as uuid } from 'uuid';

export const book = [
  {
    id: uuid(),
    name: 'PORTFOLIO',
    route: '/portfolio',
    image: 'portfolio',
  },
  { id: uuid(), name: 'ABOUT US', route: '/about-us', image: 'about-us' },
  { id: uuid(), name: 'CONTACT', route: '/contact', image: 'contact' },
];
