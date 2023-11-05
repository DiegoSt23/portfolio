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
  SiGit,
  SiStripe,
  SiJira,
  SiTestinglibrary,
  SiFramer,
  SiShopify,
  SiRollupdotjs,
  SiVite,
  SiGraphql,
  SiStorybook,
} from 'react-icons/si';
import {
  FaSass
} from 'react-icons/fa';
import { Typography } from 'diego-react-delta-ui';
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
    Icon: <SiReact size={20} color='gray' />,
    percent: 85,
  },
  {
    title: 'JavaScript',
    Icon: <SiJavascript size={20} color='gray' />,
    percent: 80,
  },
  {
    title: 'HTML',
    Icon: <SiHtml5 size={20} color='gray' />,
    percent: 80,
  },
  {
    title: 'CSS',
    Icon: <SiCss3 size={20} color='gray' />,
    percent: 80,
  },
  {
    title: 'React Native',
    Icon: <SiReact size={20} color='gray' />,
    percent: 60,
  },
  {
    title: 'TypeScript',
    Icon: <SiTypescript size={20} color='gray' />,
    percent: 75,
  },

  {
    title: 'GitHub',
    Icon: <SiGithub size={20} color='gray' />,
    percent: 80,
  },
  {
    title: 'Next',
    Icon: <SiNextdotjs size={20} color='gray' />,
    percent: 60,
  },
  {
    title: 'Jest',
    Icon: <SiJest size={20} color='gray' />,
    percent: 50,
  },
  {
    title: 'Cypress',
    Icon: <SiCypress size={20} color='gray' />,
    percent: 35,
  },
  {
    title: 'Vue',
    Icon: <SiVuedotjs size={20} color='gray' />,
    percent: 35,
  },
  {
    title: 'Stripe',
    Icon: <SiStripe size={20} color='gray' />,
    percent: 20,
  },
];

const projectsData = [
  {
    imageUrl: spotify,
    projectUrl: '',
    repoUrl: '',
    name: 'Spotify',
    description:
      'My own version of Spotify with the Spotify API, created with Delta UI. Still under development.',
    id: 1,
    status: 'In Progress',
    releaseDate: 'NA',
  },
  {
    imageUrl: delta,
    projectUrl:
      'https://diego-delta-ui.vercel.app/?path=/story/deltaui-accordion--default',
    repoUrl: 'https://github.com/DiegoSt23/delta-ui',
    name: 'Delta UI',
    description:
      'A lightweight and minimalistic React components library designed to provide a seamless user experience. It offers a curated set of reusable and customizable components that can easily be integrated into any React project.',
    id: 1,
    status: 'New',
    releaseDate: 'Aug 2023',
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
    Icon: <SiReact size={35} color='gray' />,
  },
  {
    name: 'Typescript',
    Icon: <SiTypescript size={35} color='gray' />,
  },
  {
    name: 'Javascript',
    Icon: <SiJavascript size={35} color='gray' />,
  },
  {
    name: 'Vue',
    Icon: <SiVuedotjs size={35} color='gray' />,
  },
  {
    name: 'React Native',
    Icon: <SiReact size={35} color='gray' />,
  },
  {
    name: 'Jest',
    Icon: <SiJest size={35} color='gray' />,
  },
  {
    name: 'React Testing Library',
    Icon: <SiTestinglibrary size={35} color='gray' />,
  },
  {
    name: 'Cypress',
    Icon: <SiCypress size={35} color='gray' />,
  },
  {
    name: 'CSS',
    Icon: <SiCss3 size={35} color='gray' />,
  },
  {
    name: 'SASS',
    Icon: <FaSass size={35} color='gray' />,
  },
  {
    name: 'HTML',
    Icon: <SiHtml5 size={35} color='gray' />,
  },
  {
    name: 'MUI',
    Icon: <SiMui size={35} color='gray' />,
  },
  {
    name: 'Ant Design',
    Icon: <SiAntdesign size={35} color='gray' />,
  },
  {
    name: 'Tailwind',
    Icon: <SiTailwindcss size={35} color='gray' />,
  },
  {
    name: 'Bootstrap',
    Icon: <SiBootstrap size={35} color='gray' />,
  },
  {
    name: 'Storybook',
    Icon: <SiStorybook size={35} color='gray' />,
  },
  {
    name: 'Next',
    Icon: <SiNextdotjs size={35} color='gray' />,
  },
  {
    name: 'Gatsby',
    Icon: <SiGatsby size={35} color='gray' />,
  },
  {
    name: 'Astro',
    Icon: <SiAstro size={35} color='gray' />,
  },
  {
    name: 'Redux',
    Icon: <SiRedux size={35} color='gray' />,
  },
  {
    name: 'Axios',
    Icon: <SiAxios size={35} color='gray' />,
  },
  {
    name: 'Framer Motion',
    Icon: <SiFramer size={35} color='gray' />,
  },
  {
    name: 'Rollup',
    Icon: <SiRollupdotjs size={35} color='gray' />,
  },
  {
    name: 'Vite',
    Icon: <SiVite size={35} color='gray' />,
  },
  {
    name: 'GraphQL',
    Icon: <SiGraphql size={35} color='gray' />,
  },
  {
    name: 'Git',
    Icon: <SiGit size={35} color='gray' />,
  },
  {
    name: 'GitHub',
    Icon: <SiGithub size={35} color='gray' />,
  },
  {
    name: 'Shopify',
    Icon: <SiShopify size={35} color='gray' />,
  },
  {
    name: 'Strapi',
    Icon: <SiStrapi size={35} color='gray' />,
  },
  {
    name: 'Jira',
    Icon: <SiJira size={35} color='gray' />,
  },
];

const hardSkillsData = [
  {
    title: 'HTML & CSS',
    // backgroundColor: '#8120ff2b',
    content: (
      <>
        <Typography>
          The standard markup language for constructing web pages is HyperText
          Markup Language (HTML). It is the most fundamental building block for
          creating web pages.
        </Typography>
        <br />
        <Typography>
          CSS, it is used to create the page’s layout, colour, fonts, and style.
        </Typography>
      </>
    ),
  },
  {
    title: 'Javascript & Typescript',
    // backgroundColor: '#20c0ff2b',
    content: (
      <Typography>
        Programming languages used in web development to create dynamic and
        interactive web pages. Javascript is a scripting language that allows
        you to create dynamically updating content, control multimedia, animate
        images, and pretty much everything else, while TypeScript is a
        statically typed superset of JavaScript, adding strong typing for
        enhanced code reliability.
      </Typography>
    ),
  },
  {
    title: 'Responsive Design',
    // backgroundColor: 'grayb202b',
    content: (
      <Typography>
        Approach to web design ensuring websites adapt and display effectively
        on various screen sizes and devices, providing a seamless user
        experience.
      </Typography>
    ),
  },
  {
    title: 'Version Control/Git',
    // backgroundColor: '#ff51002b',
    content: (
      <Typography>
        A system for tracking changes in code, managing project history, and
        facilitating collaboration among developers. Git is a widely used
        version control tool in software development.
      </Typography>
    ),
  },
  {
    title: 'Javascript Frameworks and Libraries',
    // backgroundColor: '#8dff1b2b',
    content: (
      <Typography>
        Pre-built libraries and tools that provide a structured and efficient
        way to develop web applications. These frameworks facilitate the
        creation of interactive user interfaces and simplify complex tasks in
        web development. e.g. React, React Native, Vue.
      </Typography>
    ),
  },
  {
    title: 'Testing/Debugging',
    // backgroundColor: '#ff1ba42b',
    content: (
      <Typography>
        Processes and tools used to evaluate code functionality, identify
        issues, and ensure software reliability. Testing involves systematically
        assessing code behavior, while debugging involves locating and resolving
        errors or bugs in the code.
      </Typography>
    ),
  },
  {
    title: 'Browser Developer Tools',
    // backgroundColor: '#1b41ff2b',
    content: (
      <Typography>
        Built-in web browser features that enable developers to inspect, debug,
        and analyze web pages and web applications in real-time. These tools
        provide valuable insights into HTML, CSS, and JavaScript, aiding in
        troubleshooting and optimization.
      </Typography>
    ),
  },
  {
    title: 'Web Performance',
    // backgroundColor: '#1bf0ff2b',
    content: (
      <Typography>
        Set of techniques and practices aimed at improving the speed,
        efficiency, and overall user experience of websites and web
        applications. This involves optimizing page loading times, reducing
        resource consumption, and enhancing responsiveness.
      </Typography>
    ),
  },
  {
    title: 'CSS Preprocessing',
    // backgroundColor: '#d51bff2b',
    content: (
      <Typography>
        A workflow enhancement technique that involves using preprocessor
        languages like SASS or LESS to write CSS in a more organized and
        efficient manner. These preprocessors offer features like variables,
        nesting, and mixins, which make it easier to manage and maintain complex
        stylesheets.
      </Typography>
    ),
  },
  {
    title: 'Command Line',
    // backgroundColor: '#c6ff1b2b',
    content: (
      <Typography>
        A text-based interface used for interacting with a computer's operating
        system or software through commands. It allows users to perform a wide
        range of tasks, including file management, software installation, and
        automation, using text commands instead of graphical interfaces.
      </Typography>
    ),
  },
];

export {
  statsData,
  projectsData,
  technologiesData,
  hardSkillsData,
};
