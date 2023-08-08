import { useState, useEffect, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
  AiOutlineCode,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineClose,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { RiHomeLine } from 'react-icons/ri';
import { BiMessageSquareDetail, BiLogoFacebook } from 'react-icons/bi';
import { IoIosStats } from 'react-icons/io';
import { GoStack } from 'react-icons/go';
import {
  BsFillPersonFill,
  BsFillPeopleFill,
  BsFillGridFill,
  BsFillTriangleFill,
} from 'react-icons/bs';
import { HiMenuAlt4 } from 'react-icons/hi';
import { SideNavBar, Drawer, Link, useWindowDimensions } from 'diego-react-delta-ui';
import {  
  Hero,
  About,
  HardSkills,
  Technologies,
  SoftSkills,
  Stats,
  Projects,
  GitHub,
  Contact,
} from '../../views';
import styles from './main.module.scss';

type NavBarItemProps = {
  icon: ReactNode,
  isActive: boolean,
  path: string,
};

const NavBarItem = ({ icon, isActive, path }: NavBarItemProps) => (
  <HashLink to={path} smooth>
    <div className={`${isActive ? styles.buttonActive : styles.button}`}>
      {icon}
    </div>
  </HashLink>
);

export const Main = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = width < 900;

  const handleDisplayDrawer = () => setIsOpen(!isOpen);

  const handleIsActive = (path: string) => hash.includes(path);

  const items = [
    {
      name: 'Home',
      icon: <RiHomeLine size={20} />,
      isActive: !hash ? true : handleIsActive('home'),
      render: (name: string, icon: ReactNode, isActive: boolean) => (
        <NavBarItem icon={icon} isActive={isActive} path='#home' />
      ),
    },
    {
      name: 'About',
      icon: <BsFillPersonFill size={20} />,
      isActive: handleIsActive('about'),
      render: (name: string, icon: ReactNode, isActive: boolean) => (
        <NavBarItem icon={icon} isActive={isActive} path='#about' />
      ),
    },
    {
      name: 'Hard Skills',
      icon: <GoStack size={20} />,
      isActive: handleIsActive('hard-skills'),
      render: (name: string, icon: ReactNode, isActive: boolean) => (
        <NavBarItem icon={icon} isActive={isActive} path='#hard-skills' />
      ),
    },
    {
      name: 'Technologies',
      icon: <AiOutlineCode size={20} />,
      isActive: handleIsActive('technologies'),
      render: (name: string, icon: ReactNode, isActive: boolean) => (
        <NavBarItem icon={icon} isActive={isActive} path='#technologies' />
      ),
    },
    {
      name: 'Soft Skills',
      icon: <BsFillPeopleFill size={20} />,
      isActive: handleIsActive('soft-skills'),
      render: (name: string, icon: ReactNode, isActive: boolean) => (
        <NavBarItem icon={icon} isActive={isActive} path='#soft-skills' />
      ),
    },
    {
      name: 'Stats',
      icon: <IoIosStats size={20} />,
      isActive: handleIsActive('stats'),
      render: (name: string, icon: ReactNode, isActive: boolean) => (
        <NavBarItem icon={icon} isActive={isActive} path='#stats' />
      ),
    },
    {
      name: 'Projects',
      icon: <BsFillGridFill size={20} />,
      isActive: handleIsActive('projects'),
      render: (name: string, icon: ReactNode, isActive: boolean) => (
        <NavBarItem icon={icon} isActive={isActive} path='#projects' />
      ),
    },
    {
      name: 'GitHub Heatmap',
      icon: <AiFillGithub size={20} />,
      isActive: handleIsActive('github'),
      render: (name: string, icon: ReactNode, isActive: boolean) => (
        <NavBarItem icon={icon} isActive={isActive} path='#github' />
      ),
    },
    {
      name: 'Contact',
      icon: <BiMessageSquareDetail size={20} />,
      isActive: handleIsActive('contact'),
      render: (name: string, icon: ReactNode, isActive: boolean) => (
        <NavBarItem icon={icon} isActive={isActive} path='#contact' />
      ),
    },
  ];
  const paths = [
    '#home',
    '#about',
    '#hard-skills',
    '#technologies',
    '#soft-skills',
    '#stats',
    '#projects',
    '#github',
    '#contact',
  ];

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <div className={styles.mainContainer}>
      <SideNavBar
        items={items}
        mainContainerClassName={styles.navBar}
        mainIcon={<BsFillTriangleFill size={25} color='#89ffe5' />}
      />
      <button className={styles.menuIcon} onClick={handleDisplayDrawer}>
        {isOpen ? (
          <AiOutlineClose size={25} color='gray' />
        ) : (
          <HiMenuAlt4 size={25} color='gray' />
        )}
      </button>
      <div className={styles.childrenContainer}>
        <Hero />
        <About />
        <HardSkills />
        <Technologies />
        <SoftSkills />
        <Stats />
        <Projects />
        <GitHub />
        <Contact />
      </div>
      <Drawer
        position='right'
        isOpen={isOpen}
        onClose={handleDisplayDrawer}
        className={styles.drawer}
      >
        <BsFillTriangleFill size={25} color='#89ffe5' />
        {items.map(({ name, icon, isActive }, index) => (
          <HashLink key={name} to={paths[index]} className={styles.link} smooth>
            <button
              className={`${
                isActive ? styles.navItemButtonActive : styles.navItemButton
              }`}
              onClick={() => {
                handleDisplayDrawer();
              }}
            >
              {icon}
              {name}
            </button>
          </HashLink>
        ))}
        <div className={styles.linksContainer}>
          <Link href='https://github.com/DiegoSt23'>
            <AiFillGithub size={20} />
          </Link>
          <Link href='https://www.linkedin.com/in/diego-%C3%A1lvarez-garc%C3%ADa/'>
            <AiFillLinkedin size={20} />
          </Link>
          <Link>
            <AiOutlineInstagram size={20} />
          </Link>
          <Link>
            <BiLogoFacebook size={20} />
          </Link>
        </div>
      </Drawer>
    </div>
  );
};
