// Core
import { v4 as uuid } from 'uuid';

// Definitions
import { type PortfolioType } from '@/types/portfolio';

export const portfolioCases: PortfolioType[] = [
  {
    id: 'glia',
    link: 'https://www.glia.com/',
    mainImgName: 'glia',
    images: ['glia-4', 'glia-1', 'glia-2', 'glia-3'],
    technologies: [
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
        icon: 'typescript',
        title: 'TypeScript',
      },
      {
        id: uuid(),
        icon: 'chakra-ui',
        title: 'Chakra UI',
      },
      {
        id: uuid(),
        icon: 'sass',
        title: 'SCSS',
      },
    ],
    title: 'Glia',
    type: 'Service for financial enterprises',
    description: `The Glia Interaction Platform unifies Digital 
    Customer Service (DCS), traditional call center, and 
    automation with a ChannelLess™ Architecture, empowering 
    businesses to create the ideal mix of interactions and adapt 
    on demand. The ability to easily shift volume between 
    channels drives revenue, efficiency, and loyalty at the 
    same time.`,
    feedback: `Incredible work experience. Excellent communication, 
    fast, accurate work. Highly recommended!`,
  },
  {
    id: 'trust-scout',
    link: 'https://www.trustscout.com/',
    mainImgName: 'trust-scout',
    images: [
      'trust-scout-1',
      'trust-scout-2',
      'trust-scout-3',
      'trust-scout-4',
    ],
    technologies: [
      {
        id: uuid(),
        icon: 'reactjs',
        title: 'React.js',
      },
      {
        id: uuid(),
        icon: 'redux',
        title: 'Redux Toolkit',
      },
      {
        id: uuid(),
        icon: 'jss',
        title: 'JSS',
      },
      { id: uuid(), icon: 'ant-design', title: 'Ant Design' },
    ],
    title: 'Trust Scout',
    type: 'Engage with their customers using AI',
    description: `This application is a comprehensive 
    tool that has evolved from its origins as a real 
    estate data and lead generation company. Its primary 
    objective is to facilitate seamless communication and 
    connections between professionals in the real estate 
    industry and potential clients. Over time, the 
    application has expanded its capabilities to include 
    sales training, demonstrating a commitment to 
    empowering individuals and businesses in the real 
    estate sector.`,
    feedback: `I had an incredible work experience. Their 
    communication was excellent, their work was fast and 
    accurate, and I would highly recommend them to anyone!`,
  },
  {
    id: 'eyezy',
    link: 'https://www.eyezy.com/',
    mainImgName: 'eyezy',
    images: ['eyezy-1', 'eyezy-2', 'eyezy-3', 'eyezy-4'],
    technologies: [
      {
        id: uuid(),
        icon: 'reactjs',
        title: 'React.js',
      },
      {
        id: uuid(),
        icon: 'material-ui',
        title: 'Material UI',
      },
      { id: uuid(), icon: 'mobx', title: 'MobX' },
      {
        id: uuid(),
        icon: 'typescript',
        title: 'TypeScript',
      },
      {
        id: uuid(),
        icon: 'jss',
        title: 'JSS',
      },
    ],
    title: 'Eyezy',
    type: 'Phone monitoring software',
    description: `Eyezy — the most powerful, feature-rich 
    phone monitoring app that thinks one step ahead to help 
    you protect your family right now — and well into the 
    future. It’s a product built for today’s hyper-connected 
    kids and is designed to work seamlessly with modern 
    social media apps.`,
    feedback: `They were a pleasure to work with, and their 
    work was top-notch. I highly recommend them!n was 
    excellent, their work was fast and accurate.`,
  },
  {
    id: 'my-home',
    link: 'https://myhomeapp.io/kw/en/home',
    mainImgName: 'my-home',
    images: ['my-home-1', 'my-home-2', 'my-home-3', 'my-home-4'],
    technologies: [
      {
        id: uuid(),
        icon: 'angular',
        title: 'Angular',
      },
      {
        id: uuid(),
        icon: 'typescript',
        title: 'TypeScript',
      },
      { id: uuid(), icon: 'rxjs', title: 'RxJS' },
      {
        id: uuid(),
        icon: 'tailwind',
        title: 'Tailwind',
      },
      {
        id: uuid(),
        icon: 'angular-material',
        title: 'Angular Material',
      },
    ],
    title: 'My Home',
    type: 'Home services app.',
    description: `MyHome is an application that allows you 
    to find home services near you such as home maintenance, home 
    cleaning, pest control, car maintenance, and more. MyHome 
    provides a warranty on all its services from 1 to 3 month(s) 
    depending on the service. MyHome offers secure payment methods 
    such as KNET, Mastercard, and Visa with a refund guarantee.`,
    feedback: `They were able to turn my project around quickly 
    and accurately, even though it was very complex.`,
  },
  {
    id: 'chipotle',
    link: 'https://www.chipotle.com/',
    mainImgName: 'chipotle',
    images: ['chipotle-1', 'chipotle-2', 'chipotle-3', 'chipotle-4'],
    technologies: [
      {
        id: uuid(),
        icon: 'vue',
        title: 'Vue',
      },
      {
        id: uuid(),
        icon: 'vuex',
        title: 'VueX',
      },
      { id: uuid(), icon: 'nuxt', title: 'Nuxt.js' },
      {
        id: uuid(),
        icon: 'tailwind',
        title: 'Tailwind',
      },
    ],
    title: 'Chipotle',
    type: 'American chain of fast casual restaurants',
    description: `Chipotle is an American chain of fast casual 
    restaurants specializing in bowls, tacos and Mission burritos 
    made to order in front of the customer. Chipotle operates 
    restaurants in the United States, United Kingdom, Canada, Germany, and France.`,
    feedback: `They were able to turn my project around quickly and accurately, 
    even though it was very. Their work is always excellent, and they're always willing 
    to go the extra mile.`,
  },
  {
    id: 'live-person',
    link: 'https://www.liveperson.com/',
    mainImgName: 'live-person',
    images: [
      'live-person-1',
      'live-person-2',
      'live-person-3',
      'live-person-4',
      'live-person-5',
    ],
    technologies: [
      {
        id: uuid(),
        icon: 'reactjs',
        title: 'React.js',
      },
      {
        id: uuid(),
        icon: 'redux',
        title: 'Redux',
      },
      { id: uuid(), icon: 'cypress', title: 'Cypress' },
      {
        id: uuid(),
        icon: 'typescript',
        title: 'TypeScript',
      },
      {
        id: uuid(),
        icon: 'tailwind',
        title: 'Tailwind',
      },
    ],
    title: 'LivePerson',
    type: 'Provider of conversational commerce and AI software',
    description: `LivePerson is a global technology company that 
    develops conversational commerce and AI software. Headquartered 
    in New York City, LivePerson is best known as the developer of 
    the Conversational Cloud, a software platform that allows 
    consumers to message with brands.`,
    feedback: `They were very professional and communicative, and 
    they delivered my project on time and within budget.`,
  },
  {
    id: 'cleverly',
    link: 'https://www.cleverly.co/',
    mainImgName: 'cleverly',
    images: ['cleverly-1', 'cleverly-2', 'cleverly-3', 'cleverly-4'],
    technologies: [
      {
        id: uuid(),
        icon: 'reactjs',
        title: 'React.js',
      },
      {
        id: uuid(),
        icon: 'redux',
        title: 'Redux Toolkit',
      },
      { id: uuid(), icon: 'nodejs', title: 'Node.js' },
      {
        id: uuid(),
        icon: 'nestjs',
        title: 'Nest.js',
      },
      {
        id: uuid(),
        icon: 'mongodb',
        title: 'MongoDB',
      },
      {
        id: uuid(),
        icon: 'express',
        title: 'Express.js',
      },
      {
        id: uuid(),
        icon: 'material-ui',
        title: 'Material UI',
      },
      {
        id: uuid(),
        icon: 'jss',
        title: 'JSS',
      },
    ],
    title: 'Cleverly',
    type: 'Lead generation agency',
    description: `Cleverly is a lead generation agency that helps 
    B2B companies generate leads and close deals using LinkedIn, 
    SEO Content, and Google Ads. They offer a done-for-you 
    service, meaning that they take care of the entire lead 
    generation process, from prospecting to outreach to nurturing.`,
    feedback: `They are knowledgeable, experienced, and produce 
    high-quality work.`,
  },
  {
    id: 'pressinform',
    link: 'https://www.pressinform.net/uk/',
    mainImgName: 'pressinform',
    images: ['pressinform-1', 'pressinform-2', 'pressinform-3'],
    technologies: [
      {
        id: uuid(),
        icon: 'php',
        title: 'PHP',
      },
      {
        id: uuid(),
        icon: 'vue',
        title: 'Vue.js',
      },
      {
        id: uuid(),
        icon: 'vuex',
        title: 'VueX',
      },
      {
        id: uuid(),
        icon: 'mysql',
        title: 'MySQL',
      },
      {
        id: uuid(),
        icon: 'sass',
        title: 'SCSS',
      },
    ],
    title: 'PRESSINFORM',
    type: 'News agency platform',
    description: `PRESSINFORM is a news agency that provides a wide 
    range of services related to the processing and distribution 
    of information. It can also carry out all stages of creating and 
    distributing information products, including collecting 
    information, processing and verifying it, creating text materials, 
    photos and videos, and distributing them.`,
    feedback: `They are knowledgeable, experienced, and produce 
    high-quality work. They were able to complete my project 
    quickly and accurately, even though it was very challenging.`,
  },
  {
    id: 'overtone',
    link: 'https://overtone.co/',
    mainImgName: 'overtone',
    images: ['overtone-1', 'overtone-2', 'overtone-3', 'overtone-4'],
    technologies: [
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
        icon: 'nodejs',
        title: 'Node.js',
      },
      {
        id: uuid(),
        icon: 'typescript',
        title: 'TypeScript',
      },
      {
        id: uuid(),
        icon: 'postgresql',
        title: 'PostgreSQL',
      },
      {
        id: uuid(),
        icon: 'express',
        title: 'Express',
      },
      {
        id: uuid(),
        icon: 'redux',
        title: 'Redux Toolkit',
      },
      {
        id: uuid(),
        icon: 'sass',
        title: 'SCSS',
      },
    ],
    title: 'oVerton',
    type: 'Hair colors shop',
    description: `oVertone hair colors are color-depositing hair 
    masks that condition while you color. Unlike harmful hair dye, 
    oVertone Coloring Conditioners are curly-friendly, vegan and 
    cruelty-free. They’re also made without peroxide, ammonia, 
    bleach, phthalates, parabens and PPDs.`,
    feedback: `They are hardworking, reliable, and always willing to go the extra mile.`,
  },
  {
    id: 'autodoc-pro',
    link: 'https://autodoc.pro/fr/',
    mainImgName: 'autodoc',
    images: ['autodoc-1', 'autodoc-2', 'autodoc-3', 'autodoc-4'],
    technologies: [
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
      { id: uuid(), icon: 'nodejs', title: 'Node.js' },
      {
        id: uuid(),
        icon: 'express',
        title: 'Express.js',
      },
      {
        id: uuid(),
        icon: 'typescript',
        title: 'TypeScript',
      },
      {
        id: uuid(),
        icon: 'less',
        title: 'Less',
      },
      {
        id: uuid(),
        icon: 'cypress',
        title: 'Cypress',
      },
      {
        id: uuid(),
        icon: 'graphql',
        title: 'GraphQL',
      },
      {
        id: uuid(),
        icon: 'ant-design',
        title: 'Ant Design',
      },
      {
        id: uuid(),
        icon: 'apollo',
        title: 'Apollo Client',
      },
    ],
    title: 'AutoDoc PRO',
    type: 'B2B platform',
    description: `AutoDoc pro is a B2B platform that helps service
     stations and mechanics purchase auto parts and accessories at
      the best prices. The goal is to attract and retain more 
      business customers through customized offers. To this end, 
      a B2B business model has been launched in France.`,
    feedback: `Their work is always excellent, and they're always 
    willing to help out. I highly recommend them to anyone!`,
  },
];
