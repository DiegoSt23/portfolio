import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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

export const Main = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = width < 900;

  const handleDisplayDrawer = () => setIsOpen(!isOpen);

  const handleNavigate = (path: string) => {
    navigate(`${path}`);
  };

  const handleIsActive = (path: string) => hash.includes(path);

  const items = [
    {
      name: 'Home',
      icon: <RiHomeLine size={20} />,
      onClick: () => handleNavigate('#home'),
      isActive: !hash ? true : handleIsActive('home'),
    },
    {
      name: 'About',
      icon: <BsFillPersonFill size={20} />,
      onClick: () => handleNavigate('#about'),
      isActive: handleIsActive('about'),
    },
    {
      name: 'Hard Skills',
      icon: <GoStack size={20} />,
      onClick: () => handleNavigate('#hard-skills'),
      isActive: handleIsActive('hard-skills'),
    },
    {
      name: 'Technologies',
      icon: <AiOutlineCode size={20} />,
      onClick: () => handleNavigate('#technologies'),
      isActive: handleIsActive('technologies'),
    },
    {
      name: 'Soft Skills',
      icon: <BsFillPeopleFill size={20} />,
      onClick: () => handleNavigate('#soft-skills'),
      isActive: handleIsActive('soft-skills'),
    },
    {
      name: 'Stats',
      icon: <IoIosStats size={20} />,
      onClick: () => handleNavigate('#stats'),
      isActive: handleIsActive('stats'),
    },
    {
      name: 'Projects',
      icon: <BsFillGridFill size={20} />,
      onClick: () => handleNavigate('#projects'),
      isActive: handleIsActive('projects'),
    },
    {
      name: 'GitHub Heatmap',
      icon: <AiFillGithub size={20} />,
      onClick: () => handleNavigate('#github'),
      isActive: handleIsActive('github'),
    },
    {
      name: 'Contact',
      icon: <BiMessageSquareDetail size={20} />,
      onClick: () => handleNavigate('#contact'),
      isActive: handleIsActive('contact'),
    },
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
        onClickMainIcon={() => navigate('#home')}
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
        {items.map(({ name, icon, onClick, isActive }) => (
          <button
            key={name}
            className={`${
              isActive ? styles.navItemButtonActive : styles.navItemButton
            }`}
            onClick={() => {
              handleDisplayDrawer();
              onClick();
            }}
          >
            {icon}
            {name}
          </button>
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
