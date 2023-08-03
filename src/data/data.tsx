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
  SiStripe,
} from 'react-icons/si';
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
    percent: 85,
  },
  {
    title: 'CSS',
    Icon: <SiCss3 size={20} color='#fff' />,
    percent: 80,
  },
  {
    title: 'Cypress',
    Icon: <SiCypress size={20} color='#fff' />,
    percent: 10,
  },
  {
    title: 'TypeScript',
    Icon: <SiTypescript size={20} color='#fff' />,
    percent: 70,
  },
  {
    title: 'React Native',
    Icon: <SiReact size={20} color='#fff' />,
    percent: 60,
  },
  {
    title: 'GitHub',
    Icon: <SiGithub size={20} color='#fff' />,
    percent: 80,
  },
  {
    title: 'Next',
    Icon: <SiNextdotjs size={20} color='#fff' />,
    percent: 50,
  },
  {
    title: 'Jest',
    Icon: <SiJest size={20} color='#fff' />,
    percent: 30,
  },
  {
    title: 'Vue',
    Icon: <SiVuedotjs size={20} color='#fff' />,
    percent: 20,
  },
  {
    title: 'Stripe',
    Icon: <SiStripe size={20} color='#fff' />,
    percent: 20,
  },
];

const projectsData = [
  {
    imageUrl: space,
    projectUrl: '',
    repoUrl: '',
    name: 'Spotify',
    description:
      'A Frontendmentor.io challenge made with React, a multipage web app about space tourism, destinations, the team and their technologies.',
    id: 1,
    isNew: true,
    releaseDate: 'NA',
  },
  {
    imageUrl: space,
    projectUrl: '',
    repoUrl: 'https://github.com/DiegoSt23/delta-ui',
    name: 'Delta UI',
    description:
      'A lightweight and minimalistic React components library designed to provide a seamless user experience. It offers a curated set of reusable and customizable components that can easily be integrated into any React project.',
    id: 1,
    isNew: true,
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
    isNew: false,
    releaseDate: 'Dec 1, 2021',
  },
  {
    imageUrl: metal,
    projectUrl: 'https://metal-records-store.vercel.app/',
    repoUrl: 'https://github.com/DiegoSt23/metal-records-store',
    name: 'Metal Records Store',
    description:
      "A demo store with some awesome metal records. It's been made with React, Router, Context and some Hooks like useState, useEffect, useReducer, etc.",
    id: 2,
    isNew: false,
    releaseDate: 'Oct 10, 2021',
  },
  {
    imageUrl: github,
    projectUrl: 'https://git-hub-dev-searcher.vercel.app/',
    repoUrl: 'https://github.com/DiegoSt23/GitHub-DevSearcher',
    name: 'GitHub Dev Searcher',
    description:
      'React App made with the GitHub API, you search for developers to find their information, repos, followers; etc.',
    id: 3,
    isNew: false,
    releaseDate: 'Nov 29, 2021',
  },
  {
    imageUrl: todo,
    projectUrl: 'https://todo-frontend-mentor-wheat.vercel.app/',
    repoUrl: 'https://github.com/DiegoSt23/Todo-Frontend-Mentor',
    name: 'Todo App',
    description:
      'Made with React, a simple app to make a todo list, you can filter by all, incomplete or completed tasks. Also select light or dark themes.',
    id: 4,
    isNew: false,
    releaseDate: 'Dec 9, 2021',
  },
  // {
  //   imageUrl: weather,
  //   projectUrl: 'https://weather-app-nine-coral.vercel.app/',
  //   repoUrl: 'https://github.com/DiegoSt23/Weather-Pro',
  //   name: 'Weather App',
  //   description:
  //     'Made with the Open Weather Map API, you can check the current weather or the 7 day forecast in any city of the world.',
  //   id: 5,
  //   isNew: false,
  //   releaseDate: 'Dec 25, 2021',
  // },
  {
    imageUrl: pokemon,
    projectUrl: 'https://pokedex-app-diego.vercel.app/',
    repoUrl: 'https://github.com/DiegoSt23/pokedex-diego',
    name: 'Pokedex',
    description:
      'Made with the Pokemon API, you can search for Pokemons by name, ID or type to find images, type, statistics and general information about them, also you can save your favorites!.',
    id: 6,
    isNew: false,
    releaseDate: 'Sep 25, 2021',
  },
  {
    imageUrl: countdown,
    projectUrl: 'https://new-year-countdown-gray.vercel.app/',
    repoUrl: 'https://github.com/DiegoSt23/New-Year-Countdown',
    name: 'New Year Coundown Timer',
    description:
      'A React App which displays the remaining days, hours, minutes and seconds until new year! It works with every year. This is one of the Frontendmentor.io challenges.',
    id: 7,
    isNew: false,
    releaseDate: 'Dec 6, 2021',
  },
  // {
  //   imageUrl: trivia,
  //   projectUrl: 'https://trivia-livid.vercel.app/',
  //   repoUrl: 'https://github.com/DiegoSt23/Trivia',
  //   name: 'Trivia',
  //   description: 'A trivia to test your knowledge about different topics.',
  //   id: 8,
  //   isNew: false,
  //   releaseDate: 'Jun 18, 2021',
  // },
];

// const hardSkillsData = [
//   {
//     name: 'React',
//     Icon: <SiReact size={20} color='#8b8b8b' />,
//   },
//   {
//     name: 'Typescript',
//     Icon: <SiTypescript size={20} color='#8b8b8b' />,
//   },
//   {
//     name: 'Javascript',
//     Icon: <SiJavascript size={20} color='#8b8b8b' />,
//   },
//   {
//     name: 'Vue',
//     Icon: <SiVuedotjs size={20} color='#8b8b8b' />,
//   },
//   {
//     name: 'React Native',
//     Icon: <SiReact size={20} color='#8b8b8b' />,
//   },
//   {
//     name: 'Jest',
//     Icon: <SiJest size={20} color='#8b8b8b' />,
//   },
//   {
//     name: 'Cypress',
//     Icon: <SiCypress size={20} color='#8b8b8b' />,
//   },
//   {
//     name: 'CSS',
//     Icon: <SiCss3 size={20} color='#8b8b8b' />,
//   },
//   {
//     name: 'SASS',
//     Icon: <FaSass size={20} color='#8b8b8b' />,
//   },
//   {
//     name: 'HTML',
//     Icon: <SiHtml5 size={20} color='#8b8b8b' />,
//   },
//   {
//     name: 'MUI',
//     Icon: <SiMaterialui size={20} color='#8b8b8b' />,
//   },
//   {
//     name: 'Ant Design',
//     Icon: <SiAntdesign size={20} color='#8b8b8b' />,
//   },
//   {
//     name: 'Tailwind',
//     Icon: <SiTailwindcss size={20} color='#8b8b8b' />,
//   },
//   {
//     name: 'Bootstrap',
//     Icon: <SiBootstrap size={20} color='#8b8b8b' />,
//   },
//   {
//     name: 'Next',
//     Icon: <SiNextdotjs size={20} color='#8b8b8b' />,
//   },
//   {
//     name: 'Redux',
//     Icon: <SiRedux size={20} color='#8b8b8b' />,
//   },
//   {
//     name: 'Next UI',
//     Icon: <SiNextdotjs size={20} color='#8b8b8b' />,
//   },
//   // {
//   //   name: 'Axios',
//   //   Icon: <SiAxios size={20} color='#8b8b8b' />,
//   // },
//   {
//     name: 'Formik',
//     Icon: <SiTypescript size={20} color='#8b8b8b' />,
//   },
//   {
//     name: 'GitHub',
//     Icon: <SiGithub size={20} color='#8b8b8b' />,
//   },
// ];

export { statsData, projectsData };
