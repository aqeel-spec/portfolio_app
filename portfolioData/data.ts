import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  chakra,
  material,
  canva,
} from '../public/assets'
import { IconWeb, IconNextjs, IconReact, IconNodejs } from '@/components/icons'
import Quiz from '../public/quiz.png'
import next from '../public/next.png'
import {
  panacloud,
  panaverseDao,
  pricingUi,
  store,
  todo,
  twitter,
} from '@/public/portfolio'

const IconsCustm = [IconNextjs, IconReact, IconNodejs, IconWeb]

const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'NextJs',
    icon: next,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Chakra UI',
    icon: chakra,
  },
  {
    name: 'Material UI',
    icon: material,
  },

  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Canva',
    icon: canva,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'E Store',
    icon: mobile,
    iconBg: '#383E56',
    date: 'March 2021 Jan 2022',
    link: 'http://bootcamp-peo3.surge.sh/',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Quiz App',
    icon: Quiz,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    link: 'https://quizapp-pro6.surge.sh/',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    link: 'https://quizapp-pro6.surge.sh/',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Twitter clone',
    link: 'https://twitter-orpin.vercel.app',
    icon: next,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'This app uses google signIn firebase atentication',
      'Developing and maintaining web applications using NextJs and tailwindCSS and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    link: '#this',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Shoe Store',
    description:
      'Web-based platform that allows users to shoes of famous company NIKEE, provides you your dreams shoes ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'html5',
        color: 'green-text-gradient',
      },
      {
        name: 'css3',
        color: 'pink-text-gradient',
      },
    ],
    image: store,
    visit: 'http://bootcamp-peo3.surge.sh/',
    source_code_link: 'https://github.com/aqeel-spec/shoe-store-app',
  },
  {
    name: 'Twitter clone',
    description:
      'This app is created only for learning purposes , hope you will enjoy these features the App has special features hopt you will visit and please leave a comment. ',
    tags: [
      {
        name: 'NextJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindCss',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'pink-text-gradient',
      },
    ],
    visit: 'https://twitter-orpin.vercel.app/',
    image: twitter,
    source_code_link: 'https://github.com/aqeel-spec/twitter-clone-app-',
  },
  {
    name: 'Todo App',
    description:
      'Nextjs fullstack todo app , you can make notes , set timetable and a lot of amazing works can be done using this app it is up to you.  ',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindCss',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'chakra UI',
        color: 'green-text-gradient',
      },
    ],
    image: todo,
    visit: 'https://todo-app-aqeel-spec.vercel.app/',
    source_code_link: 'https://github.com/aqeel-spec/todo_app_nextjs13',
  },
  {
    name: 'Panaverse Dao',
    description:
      ' All syllabus of panaverse course are updated from specialization to common , You can visit all syllabus under Nav bar courses portion ',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindCss',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
    ],
    image: panaverseDao,
    visit: 'https://panaverse-dao-six-rouge.vercel.app/',
    source_code_link: 'https://github.com/aqeel-spec/panaverse_dao',
  },
  {
    name: 'Pricing UI',
    description:
      ' Initial pricing ui app for startUp of tailwind css , UI is created by following figma design ',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindCss',
        color: 'green-text-gradient',
      },
      {
        name: 'Figma',
        color: 'pink-text-gradient',
      },
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
    ],
    image: pricingUi,
    visit: 'https://panaverse-dao-six-rouge.vercel.app/',
    source_code_link: 'https://github.com/aqeel-spec/panaverse_dao',
  },
  {
    name: 'PanaCloud',
    description: ' Company app created by following design from figma  ',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'green-text-gradient',
      },
      {
        name: 'Figma',
        color: 'pink-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
    ],
    image: panacloud,
    visit: 'http://statix-responsive.surge.sh/',
    source_code_link:
      'https://github.com/aqeel-spec/PIAIC-CSS-final-assignment-',
  },
]

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
  IconsCustm,
}
