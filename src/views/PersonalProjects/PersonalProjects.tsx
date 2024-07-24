import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaReact, FaSass, FaCss3Alt } from 'react-icons/fa';
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiAxios,
  SiReactrouter,
  SiVite,
  SiAstro,
  SiStrapi,
  SiTailwindcss,
  SiShopify,
  SiMui,
  SiAntdesign,
  SiVuedotjs,
  SiHandlebarsdotjs,
  SiRedux,
} from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';
import { TbBrandFramerMotion } from 'react-icons/tb';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useWindowDimensions } from '@/helpers';
import spotify from '../../assets/images/spotify.png';
import delta from '../../assets/images/delta-ui.png';
import space from '../../assets/images/space.jpeg';
import metal from '../../assets/images/metal.jpeg';
import github from '../../assets/images/github.jpeg';
import todo from '../../assets/images/todo.jpeg';
import reservamos from '../../assets/images/reservamos.png';
import countdown from '../../assets/images/countdown.jpeg';
import blks from '../../assets/images/blks.png';
import temple from '../../assets/images/temple.png';
import path from '../../assets/images/path.png';
import ohho from '../../assets/images/ohho.png';
import taxaroo from '../../assets/images/taxaroo.png';
import prosper from '../../assets/images/prosper.png';
import kip from '../../assets/images/kip.png';
import crig from '../../assets/images/crig.png';
import epos from '../../assets/images/e-poster.png';
import { Project } from './components';

export const PersonalProjects = () => {
  const { t } = useTranslation();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const { width } = useWindowDimensions();
  const isMobile = width < 640;

  const projectsData = [
    {
      imageUrl: blks,
      projectUrl: 'https://blackstone.studio/',
      name: 'Blackstone Studio',
      id: 9,
      releaseDate: '2022-2024',
      technologiesUsed: [
        { name: 'Vite', icon: <SiVite size={25} /> },
        { name: 'Astro', icon: <SiAstro size={25} /> },
        { name: 'React', icon: <FaReact size={25} /> },
        { name: 'Sass', icon: <FaSass size={25} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={25} /> },
        { name: 'TypeScript', icon: <BiLogoTypescript size={25} /> },
        { name: 'CSS', icon: <FaCss3Alt size={25} /> },
        { name: 'Axios', icon: <SiAxios size={20} /> },
        { name: 'React Router', icon: <SiReactrouter size={25} /> },
        { name: 'Strapi', icon: <SiStrapi size={25} /> },
      ],
    },
    {
      imageUrl: epos,
      projectUrl: 'https://myposterservice.com/',
      name: 'My Poster Service',
      id: 17,
      releaseDate: '2024',
      technologiesUsed: [
        { name: 'Vite', icon: <SiVite size={25} /> },
        { name: 'React', icon: <FaReact size={25} /> },
        { name: 'MUI', icon: <SiMui size={25} /> },
        { name: 'Sass', icon: <FaSass size={25} /> },
        { name: 'TypeScript', icon: <BiLogoTypescript size={25} /> },
        { name: 'CSS', icon: <FaCss3Alt size={25} /> },
        { name: 'Axios', icon: <SiAxios size={20} /> },
        { name: 'React Router', icon: <SiReactrouter size={25} /> },
        { name: 'Redux', icon: <SiRedux size={25} /> },
      ],
    },
    {
      imageUrl: spotify,
      projectUrl: '',
      repoUrl: '',
      name: 'Spotify',
      description: t('projects.projects.spotify.description'),
      id: 1,
      status: 'In Progress',
      releaseDate: '2024',
      technologiesUsed: [
        { name: 'Vite', icon: <SiVite size={25} /> },
        { name: 'React', icon: <FaReact size={25} /> },
        { name: 'Sass', icon: <FaSass size={25} /> },
        { name: 'TypeScript', icon: <BiLogoTypescript size={25} /> },
        { name: 'CSS', icon: <FaCss3Alt size={25} /> },
        { name: 'Axios', icon: <SiAxios size={25} /> },
        { name: 'React Router', icon: <SiReactrouter size={25} /> },
        { name: 'Redux', icon: <SiRedux size={25} /> },
      ],
    },
    {
      imageUrl: delta,
      projectUrl:
        'https://diego-delta-ui.vercel.app/?path=/story/deltaui-accordion--default',
      repoUrl: 'https://github.com/DiegoSt23/delta-ui',
      name: 'Delta UI',
      description: t('projects.projects.delta.description'),
      id: 2,
      status: 'New',
      releaseDate: 'Aug 2023',
      technologiesUsed: [
        { name: 'Vite', icon: <SiVite size={25} /> },
        { name: 'React', icon: <FaReact size={25} /> },
        { name: 'Sass', icon: <FaSass size={25} /> },
        { name: 'Typescript', icon: <BiLogoTypescript size={25} /> },
        { name: 'CSS3', icon: <FaCss3Alt size={25} /> },
      ],
    },
    {
      imageUrl: reservamos,
      projectUrl: 'https://reservamos-eta.vercel.app/',
      repoUrl: 'https://github.com/DiegoSt23/reservamos',
      name: 'Reservamos Weather Forecast',
      description: t('projects.projects.reservamos.description'),
      id: 3,
      status: 'New',
      releaseDate: 'Dec 2023',
      technologiesUsed: [
        { name: 'Vite', icon: <SiVite size={25} /> },
        { name: 'React', icon: <FaReact size={25} /> },
        { name: 'Sass', icon: <FaSass size={25} /> },
        { name: 'Typescript', icon: <BiLogoTypescript size={25} /> },
        { name: 'CSS3', icon: <FaCss3Alt size={25} /> },
        { name: 'Axios', icon: <SiAxios size={25} /> },
      ],
    },
    {
      imageUrl: temple,
      projectUrl: 'https://templestclair.com/',
      name: 'Temple St. Clair',
      id: 10,
      releaseDate: '2022',
      technologiesUsed: [
        { name: 'Shopify', icon: <SiShopify size={25} /> },
        { name: 'React', icon: <FaReact size={25} /> },
        { name: 'Sass', icon: <FaSass size={25} /> },
        { name: 'Typescript', icon: <BiLogoTypescript size={25} /> },
        { name: 'CSS3', icon: <FaCss3Alt size={25} /> },
        { name: 'Axios', icon: <SiAxios size={25} /> },
      ],
    },
    {
      imageUrl: path,
      projectUrl: 'https://www.patmcgrath.com/',
      name: 'Path McGrath',
      id: 11,
      releaseDate: '2022',
      technologiesUsed: [
        { name: 'Shopify', icon: <SiShopify size={25} /> },
        { name: 'React', icon: <FaReact size={25} /> },
        { name: 'Sass', icon: <FaSass size={25} /> },
        { name: 'Typescript', icon: <BiLogoTypescript size={25} /> },
        { name: 'CSS3', icon: <FaCss3Alt size={25} /> },
        { name: 'Axios', icon: <SiAxios size={25} /> },
      ],
    },
    {
      imageUrl: ohho,
      projectUrl: 'https://weareohho.com/',
      name: 'oHHo',
      id: 12,
      releaseDate: '2022',
      technologiesUsed: [
        { name: 'Shopify', icon: <SiShopify size={25} /> },
        { name: 'React', icon: <FaReact size={25} /> },
        { name: 'Sass', icon: <FaSass size={25} /> },
        { name: 'Typescript', icon: <BiLogoTypescript size={25} /> },
        { name: 'CSS3', icon: <FaCss3Alt size={25} /> },
        { name: 'Axios', icon: <SiAxios size={25} /> },
      ],
    },
    {
      imageUrl: taxaroo,
      projectUrl: 'https://taxaroo.com/',
      name: 'Taxaroo',
      id: 13,
      releaseDate: '2022',
      technologiesUsed: [
        { name: 'React', icon: <FaReact size={25} /> },
        { name: 'Ant Design', icon: <SiAntdesign size={25} /> },
        { name: 'Sass', icon: <FaSass size={25} /> },
        { name: 'Typescript', icon: <BiLogoTypescript size={25} /> },
        { name: 'CSS3', icon: <FaCss3Alt size={25} /> },
        { name: 'Axios', icon: <SiAxios size={25} /> },
        { name: 'React Router', icon: <SiReactrouter size={25} /> },
        { name: 'Redux', icon: <SiRedux size={25} /> },
      ],
    },
    {
      imageUrl: prosper,
      projectUrl: 'https://prosperwireless.us/',
      name: 'Prosper Wireless',
      id: 14,
      releaseDate: '2023',
      technologiesUsed: [
        { name: 'Vite', icon: <SiVite size={25} /> },
        { name: 'React', icon: <FaReact size={25} /> },
        { name: 'Sass', icon: <FaSass size={25} /> },
        { name: 'Typescript', icon: <BiLogoTypescript size={25} /> },
        { name: 'CSS3', icon: <FaCss3Alt size={25} /> },
        { name: 'Axios', icon: <SiAxios size={25} /> },
        { name: 'React Router', icon: <SiReactrouter size={25} /> },
        { name: 'Redux', icon: <SiRedux size={25} /> },
      ],
    },
    {
      imageUrl: kip,
      projectUrl: 'https://kiptherapy.com/',
      name: 'Kip Therapy',
      id: 15,
      releaseDate: '2022',
      technologiesUsed: [
        { name: 'React', icon: <FaReact size={25} /> },
        { name: 'Material UI', icon: <SiMui size={25} /> },
        { name: 'Sass', icon: <FaSass size={25} /> },
        { name: 'Typescript', icon: <BiLogoTypescript size={25} /> },
        { name: 'CSS3', icon: <FaCss3Alt size={25} /> },
        { name: 'Axios', icon: <SiAxios size={25} /> },
        { name: 'React Router', icon: <SiReactrouter size={25} /> },
        { name: 'Redux', icon: <SiRedux size={25} /> },
      ],
    },
    {
      imageUrl: crig,
      projectUrl: 'https://crinsurancegroupllc.com/agent-portal/',
      name: 'CR Insurance Group',
      id: 16,
      releaseDate: '2022-2023',
      technologiesUsed: [
        { name: 'Vue.js', icon: <SiVuedotjs size={25} /> },
        { name: 'Typescript', icon: <BiLogoTypescript size={25} /> },
        { name: 'CSS3', icon: <FaCss3Alt size={25} /> },
        { name: 'Axios', icon: <SiAxios size={25} /> },
        { name: 'Handlebars.js', icon: <SiHandlebarsdotjs size={25} /> },
      ],
    },
    {
      imageUrl: space,
      projectUrl: 'https://space-tourism-three.vercel.app/',
      repoUrl: 'https://github.com/DiegoSt23/Space-Tourism',
      name: 'Space Tourism',
      description: t('projects.projects.space.description'),
      id: 4,
      releaseDate: 'Dec 2021',
      technologiesUsed: [
        { name: 'React', icon: <FaReact size={25} /> },
        { name: 'JavaScript', icon: <RiJavascriptFill size={25} /> },
        { name: 'Sass', icon: <FaSass size={25} /> },
        { name: 'CSS3', icon: <FaCss3Alt size={25} /> },
        { name: 'React Router', icon: <SiReactrouter size={25} /> },
        { name: 'Framer Motion', icon: <TbBrandFramerMotion size={25} /> },
      ],
    },
    {
      imageUrl: metal,
      projectUrl: 'https://metal-records-store.vercel.app/',
      repoUrl: 'https://github.com/DiegoSt23/metal-records-store',
      name: 'Metal Records Store',
      description: t('projects.projects.metal.description'),
      id: 5,
      releaseDate: 'Oct 2021',
      technologiesUsed: [
        { name: 'React', icon: <FaReact size={25} /> },
        { name: 'JavaScript', icon: <RiJavascriptFill size={25} /> },
        { name: 'CSS3', icon: <FaCss3Alt size={25} /> },
        { name: 'Axios', icon: <SiAxios size={25} /> },
        { name: 'React Router', icon: <SiReactrouter size={25} /> },
        { name: 'Framer Motion', icon: <TbBrandFramerMotion size={25} /> },
      ],
    },
    {
      imageUrl: github,
      projectUrl: 'https://git-hub-dev-searcher.vercel.app/',
      repoUrl: 'https://github.com/DiegoSt23/GitHub-DevSearcher',
      name: 'GitHub Dev Searcher',
      description: t('projects.projects.github.description'),
      id: 6,
      releaseDate: 'Nov 2021',
      technologiesUsed: [
        { name: 'React', icon: <FaReact size={25} /> },
        { name: 'JavaScript', icon: <RiJavascriptFill size={25} /> },
        { name: 'CSS3', icon: <FaCss3Alt size={25} /> },
        { name: 'Axios', icon: <SiAxios size={25} /> },
        { name: 'React Router', icon: <SiReactrouter size={25} /> },
        { name: 'Framer Motion', icon: <TbBrandFramerMotion size={25} /> },
      ],
    },
    {
      imageUrl: todo,
      projectUrl: 'https://todo-frontend-mentor-wheat.vercel.app/',
      repoUrl: 'https://github.com/DiegoSt23/Todo-Frontend-Mentor',
      name: 'Todo App',
      description: t('projects.projects.todo.description'),
      id: 7,
      releaseDate: 'Dec 2021',
      technologiesUsed: [
        { name: 'React', icon: <FaReact size={25} /> },
        { name: 'JavaScript', icon: <RiJavascriptFill size={25} /> },
        { name: 'CSS3', icon: <FaCss3Alt size={25} /> },
      ],
    },
    {
      imageUrl: countdown,
      projectUrl: 'https://new-year-countdown-gray.vercel.app/',
      repoUrl: 'https://github.com/DiegoSt23/New-Year-Countdown',
      name: 'New Year Coundown Timer',
      description: t('projects.projects.countdown.description'),
      id: 8,
      releaseDate: 'Dec 2021',
      technologiesUsed: [
        { name: 'React', icon: <FaReact size={25} /> },
        { name: 'JavaScript', icon: <RiJavascriptFill size={25} /> },
        { name: 'CSS3', icon: <FaCss3Alt size={25} /> },
        { name: 'Framer Motion', icon: <TbBrandFramerMotion size={25} /> },
      ],
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className='mx-auto flex flex-col h-[50%] max-w-6xl items-center px-[1rem] py-[5rem] p-2 relative'>
      <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl sm:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-8'>
        {t('projects.title')}
      </span>
      <Carousel setApi={setApi} className='w-full max-w-xs'>
        <CarouselContent>
          {projectsData.map((item) => (
            <Project key={item.id} {...item} isMobile={isMobile} />
          ))}
        </CarouselContent>
        {!isMobile && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
      <div className='text-center text-sm text-muted-foreground'>
        {current} / {count}
      </div>
    </div>
  );
};
