import {
  SiTypescript,
  SiReact,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiGithub,
  SiNextdotjs,
  SiJest,
  SiCypress,
  SiVuedotjs,
  SiMui,
  SiAntdesign,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiAxios,
  SiGatsby,
  SiAstro,
  SiStrapi,
  SiHandlebarsdotjs,
  SiGit,
  SiStripe,
  SiJira,
  SiTestinglibrary,
  SiFramer,
  SiShopify,
  SiFirebase,
} from 'react-icons/si';
import {
  FaSass
} from 'react-icons/fa';
import spotify from '../assets/images/spotify.png';
import delta from '../assets/images/delta-ui.png';
import space from '../assets/images/space.jpeg';
import metal from '../assets/images/metal.jpeg';
import github from '../assets/images/github.jpeg';
import todo from '../assets/images/todo.jpeg';
import pokemon from '../assets/images/pokemon.png';
import countdown from '../assets/images/countdown.jpeg';

const statsData = [
  {
    title: 'React',
    Icon: <SiReact size={20} color='#fff' />,
    percent: 85,
  },
  {
    title: 'JavaScript',
    Icon: <SiJavascript size={20} color='#fff' />,
    percent: 80,
  },
  {
    title: 'HTML',
    Icon: <SiHtml5 size={20} color='#fff' />,
    percent: 80,
  },
  {
    title: 'CSS',
    Icon: <SiCss3 size={20} color='#fff' />,
    percent: 80,
  },
  {
    title: 'React Native',
    Icon: <SiReact size={20} color='#fff' />,
    percent: 60,
  },
  {
    title: 'TypeScript',
    Icon: <SiTypescript size={20} color='#fff' />,
    percent: 75,
  },

  {
    title: 'GitHub',
    Icon: <SiGithub size={20} color='#fff' />,
    percent: 80,
  },
  {
    title: 'Next',
    Icon: <SiNextdotjs size={20} color='#fff' />,
    percent: 60,
  },
  {
    title: 'Jest',
    Icon: <SiJest size={20} color='#fff' />,
    percent: 50,
  },
  {
    title: 'Cypress',
    Icon: <SiCypress size={20} color='#fff' />,
    percent: 35,
  },
  {
    title: 'Vue',
    Icon: <SiVuedotjs size={20} color='#fff' />,
    percent: 35,
  },
  {
    title: 'Stripe',
    Icon: <SiStripe size={20} color='#fff' />,
    percent: 20,
  },
];

const projectsData = [
  {
    imageUrl: spotify,
    projectUrl: '',
    repoUrl: '',
    name: 'Spotify',
    description: 'My own version of Spotify with the Spotify API, created with Delta UI. Still under development.',
    id: 1,
    status: 'In Progress',
    releaseDate: 'NA',
  },
  {
    imageUrl: delta,
    projectUrl:
      'https://64c82a77442a234e83128ff8-bheesekwfv.chromatic.com/?path=/story/deltaui-textarea--error',
    repoUrl: 'https://github.com/DiegoSt23/delta-ui',
    name: 'Delta UI',
    description:
      'A lightweight and minimalistic React components library designed to provide a seamless user experience. It offers a curated set of reusable and customizable components that can easily be integrated into any React project.',
    id: 1,
    status: 'New',
    releaseDate: 'NA',
  },
  {
    imageUrl: space,
    projectUrl: 'https://space-tourism-three.vercel.app/',
    repoUrl: 'https://github.com/DiegoSt23/Space-Tourism',
    name: 'Space Tourism',
    description:
      'A Frontendmentor.io challenge made with React, a multipage web app about space tourism, destinations, the team and their technologies.',
    id: 1,
    releaseDate: 'Dec 2021',
  },
  {
    imageUrl: metal,
    projectUrl: 'https://metal-records-store.vercel.app/',
    repoUrl: 'https://github.com/DiegoSt23/metal-records-store',
    name: 'Metal Records Store',
    description:
      "A demo store with some awesome metal records. It's been made with React, Router, Context and some Hooks like useState, useEffect, useReducer, etc.",
    id: 2,
    releaseDate: 'Oct 2021',
  },
  {
    imageUrl: github,
    projectUrl: 'https://git-hub-dev-searcher.vercel.app/',
    repoUrl: 'https://github.com/DiegoSt23/GitHub-DevSearcher',
    name: 'GitHub Dev Searcher',
    description:
      'React App made with the GitHub API, you search for developers to find their information, repos, followers; etc.',
    id: 3,
    releaseDate: 'Nov 2021',
  },
  {
    imageUrl: todo,
    projectUrl: 'https://todo-frontend-mentor-wheat.vercel.app/',
    repoUrl: 'https://github.com/DiegoSt23/Todo-Frontend-Mentor',
    name: 'Todo App',
    description:
      'Made with React, a simple app to make a todo list, you can filter by all, incomplete or completed tasks. Also select light or dark themes.',
    id: 4,
    releaseDate: 'Dec 2021',
  },
  {
    imageUrl: pokemon,
    projectUrl: 'https://pokedex-app-diego.vercel.app/',
    repoUrl: 'https://github.com/DiegoSt23/pokedex-diego',
    name: 'Pokedex',
    description:
      'Made with the Pokemon API, you can search for Pokemons by name, ID or type to find images, type, statistics and general information about them, also you can save your favorites!.',
    id: 6,
    releaseDate: 'Sep 2021',
  },
  {
    imageUrl: countdown,
    projectUrl: 'https://new-year-countdown-gray.vercel.app/',
    repoUrl: 'https://github.com/DiegoSt23/New-Year-Countdown',
    name: 'New Year Coundown Timer',
    description:
      'A React App which displays the remaining days, hours, minutes and seconds until new year! It works with every year. This is one of the Frontendmentor.io challenges.',
    id: 7,
    releaseDate: 'Dec 2021',
  },
];

const technologiesData = [
  {
    name: 'React',
    Icon: <SiReact size={35} color='#fff' />,
  },
  {
    name: 'Typescript',
    Icon: <SiTypescript size={35} color='#fff' />,
  },
  {
    name: 'Javascript',
    Icon: <SiJavascript size={35} color='#fff' />,
  },
  {
    name: 'Vue',
    Icon: <SiVuedotjs size={35} color='#fff' />,
  },
  {
    name: 'React Native',
    Icon: <SiReact size={35} color='#fff' />,
  },
  {
    name: 'Jest',
    Icon: <SiJest size={35} color='#fff' />,
  },
  {
    name: 'React Testing Library',
    Icon: <SiTestinglibrary size={35} color='#fff' />,
  },
  {
    name: 'Cypress',
    Icon: <SiCypress size={35} color='#fff' />,
  },
  {
    name: 'CSS',
    Icon: <SiCss3 size={35} color='#fff' />,
  },
  {
    name: 'SASS',
    Icon: <FaSass size={35} color='#fff' />,
  },
  {
    name: 'HTML',
    Icon: <SiHtml5 size={35} color='#fff' />,
  },
  {
    name: 'MUI',
    Icon: <SiMui size={35} color='#fff' />,
  },
  {
    name: 'Ant Design',
    Icon: <SiAntdesign size={35} color='#fff' />,
  },
  {
    name: 'Tailwind',
    Icon: <SiTailwindcss size={35} color='#fff' />,
  },
  {
    name: 'Bootstrap',
    Icon: <SiBootstrap size={35} color='#fff' />,
  },
  {
    name: 'Next UI',
    Icon: <SiNextdotjs size={35} color='#fff' />,
  },
  {
    name: 'Handlebars',
    Icon: <SiHandlebarsdotjs size={35} color='#fff' />,
  },
  {
    name: 'Next',
    Icon: <SiNextdotjs size={35} color='#fff' />,
  },
  {
    name: 'Gatsby',
    Icon: <SiGatsby size={35} color='#fff' />,
  },
  {
    name: 'Astro',
    Icon: <SiAstro size={35} color='#fff' />,
  },
  {
    name: 'Redux',
    Icon: <SiRedux size={35} color='#fff' />,
  },
  {
    name: 'Axios',
    Icon: <SiAxios size={35} color='#fff' />,
  },
  {
    name: 'Framer Motion',
    Icon: <SiFramer size={35} color='#fff' />,
  },
  {
    name: 'Stripe',
    Icon: <SiStripe size={35} color='#fff' />,
  },
  {
    name: 'Git',
    Icon: <SiGit size={35} color='#fff' />,
  },
  {
    name: 'GitHub',
    Icon: <SiGithub size={35} color='#fff' />,
  },
  {
    name: 'Shopify',
    Icon: <SiShopify size={35} color='#fff' />,
  },
  {
    name: 'Firebase',
    Icon: <SiFirebase size={35} color='#fff' />,
  },
  {
    name: 'Strapi',
    Icon: <SiStrapi size={35} color='#fff' />,
  },
  {
    name: 'Jira',
    Icon: <SiJira size={35} color='#fff' />,
  },
];

export { statsData, projectsData, technologiesData };
