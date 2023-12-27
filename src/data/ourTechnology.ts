// Core
import { v4 as uuid } from 'uuid';

// Definitions
import { type OurTechnologyType } from '@/types/ourTechnology';

export const frontend: OurTechnologyType[] = [
  {
    id: uuid(),
    icon: 'javascript',
    title: 'JavaScript',
  },
  {
    id: uuid(),
    icon: 'typescript',
    title: 'TypeScript',
  },
  {
    id: uuid(),
    icon: 'reactjs',
    title: 'React.js',
  },
  {
    id: uuid(),
    icon: 'nextjs',
    title: 'Next.js',
  },
  {
    id: uuid(),
    icon: 'sass',
    title: 'SASS/SCSS',
  },
  {
    id: uuid(),
    icon: 'less',
    title: 'LESS',
  },
  {
    id: uuid(),
    icon: 'material-ui',
    title: 'Material UI',
  },
  {
    id: uuid(),
    icon: 'ant-design',
    title: 'Ant Design',
  },
  {
    id: uuid(),
    icon: 'tailwind',
    title: 'Tailwind',
  },
  {
    id: uuid(),
    icon: 'chakra-ui',
    title: 'Chakra UI',
  },
  {
    id: uuid(),
    icon: 'jss',
    title: 'JSS',
  },
];

export const backend: OurTechnologyType[] = [
  { id: uuid(), icon: 'nodejs', title: 'Node.js' },
  { id: uuid(), icon: 'express', title: 'Express.js' },
  { id: uuid(), icon: 'nestjs', title: 'Nest.js' },
  { id: uuid(), icon: 'mongodb', title: 'MongoDB' },
  { id: uuid(), icon: 'postgresql', title: 'PostgreSQL' },
  { id: uuid(), icon: 'mysql', title: 'MySQL' },
  { id: uuid(), icon: 'graphql', title: 'GraphQL' },
  { id: uuid(), icon: 'socketio', title: 'Socket.IO' },
];
