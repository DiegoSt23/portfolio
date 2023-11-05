import { useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { Pivot as Hamburger } from 'hamburger-react';
import {
  AiOutlineCode,
  AiFillGithub,
} from 'react-icons/ai';
import { RiHomeLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { GoStack } from 'react-icons/go';
import {
  BsFillPersonFill,
  // BsFillPeopleFill,
  BsFillGridFill,
  BsFillSunFill,
  BsMoon,
} from 'react-icons/bs';
import {
  Drawer,
  useWindowDimensions,
  SideNavBar,
  Typography,
  useTheme,
} from 'diego-react-delta-ui';
import {  
  Hero,
  Me,
  About,
  HardSkills,
  Technologies,
  // SoftSkills,
  // Stats,
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

export const Main = () => {
  const { isDark, switchTheme } = useTheme();
  const { hash } = useLocation();
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = width < 900;

  const NavBarItem = ({ icon, isActive, path }: NavBarItemProps) => (
    <HashLink to={path} smooth>
      <div
        className={`${
          isActive
            ? isDark
              ? styles.buttonActiveDark
              : styles.buttonActiveLight
            : isDark
              ? styles.buttonDark
              : styles.buttonLight
        }`}
      >
        {icon}
      </div>
    </HashLink>
  );

  const handleDisplayDrawer = () => setIsOpen(!isOpen);

  const handleIsActive = (path: string) => path === hash;

  const items = [
    {
      name: 'Home',
      icon: <RiHomeLine size={20} />,
      isActive: !hash ? true : handleIsActive('#home'),
      render: ({ icon, isActive }: { icon: ReactNode; isActive: boolean }) => (
        <NavBarItem icon={icon} isActive={isActive} path='#home' />
      ),
    },
    {
      name: 'Me',
      icon: <BsFillPersonFill size={20} />,
      isActive: handleIsActive('#me'),
      render: ({ icon, isActive }: { icon: ReactNode; isActive: boolean }) => (
        <NavBarItem icon={icon} isActive={isActive} path='#me' />
      ),
    },
    {
      name: 'About',
      icon: <IoMdInformationCircleOutline size={23} />,
      isActive: handleIsActive('#about'),
      render: ({ icon, isActive }: { icon: ReactNode; isActive: boolean }) => (
        <NavBarItem icon={icon} isActive={isActive} path='#about' />
      ),
    },
    {
      name: 'Hard Skills',
      icon: <AiOutlineCode size={20} />,
      isActive: handleIsActive('#hard-skills'),
      render: ({ icon, isActive }: { icon: ReactNode; isActive: boolean }) => (
        <NavBarItem icon={icon} isActive={isActive} path='#hard-skills' />
      ),
    },
    {
      name: 'Stack',
      icon: <GoStack size={20} />,
      isActive: handleIsActive('#stack'),
      render: ({ icon, isActive }: { icon: ReactNode; isActive: boolean }) => (
        <NavBarItem icon={icon} isActive={isActive} path='#stack' />
      ),
    },
    // {
    //   name: 'Soft Skills',
    //   icon: <BsFillPeopleFill size={20} />,
    //   isActive: handleIsActive('soft-skills'),
    //   render: ({ icon, isActive }: { icon: ReactNode; isActive: boolean }) => (
    //     <NavBarItem icon={icon} isActive={isActive} path='#soft-skills' />
    //   ),
    // },
    // {
    //   name: 'Stats',
    //   icon: <IoIosStats size={20} />,
    //   isActive: handleIsActive('stats'),
    //   render: (name: string, icon: ReactNode, isActive: boolean) => (
    //     <NavBarItem icon={icon} isActive={isActive} path='#stats' />
    //   ),
    // },
    {
      name: 'Projects',
      icon: <BsFillGridFill size={20} />,
      isActive: handleIsActive('#projects'),
      render: ({ icon, isActive }: { icon: ReactNode; isActive: boolean }) => (
        <NavBarItem icon={icon} isActive={isActive} path='#projects' />
      ),
    },
    {
      name: 'GitHub',
      icon: <AiFillGithub size={20} />,
      isActive: handleIsActive('#github'),
      render: ({ icon, isActive }: { icon: ReactNode; isActive: boolean }) => (
        <NavBarItem icon={icon} isActive={isActive} path='#github' />
      ),
    },
    {
      name: 'Contact',
      icon: <BiMessageSquareDetail size={20} />,
      isActive: handleIsActive('#contact'),
      render: ({ icon, isActive }: { icon: ReactNode; isActive: boolean }) => (
        <NavBarItem icon={icon} isActive={isActive} path='#contact' />
      ),
    },
  ];

  const bottomItems = [
    {
      name: isDark ? 'Light Mode' : 'Dark Mode',
      icon: (
        <button className={styles.themeSwitcherButton} onClick={switchTheme}>
          {isDark ? <BsFillSunFill size={20} /> : <BsMoon size={18} />}
        </button>
      ),
      isActive: false,
    },
  ];

  const paths = [
    '#home',
    '#me',
    '#about',
    '#hard-skills',
    '#stack',
    // '#soft-skills',
    // '#stats',
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
      <motion.div
        className={isDark ? styles.barContainerDark : styles.barContainerLight}
        initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        transition={{
          delay: 1,
          duration: 0.3,
        }}
      >
        <SideNavBar
          items={items}
          bottomItems={bottomItems}
          mainContainerClassName={styles.navBar}
        />
      </motion.div>
      <button className={styles.menuIcon} onClick={handleDisplayDrawer}>
        <Hamburger
          toggled={isOpen}
          toggle={handleDisplayDrawer}
          size={25}
          color='gray'
        />
      </button>
      <div
        className={
          isDark ? styles.childrenContainerDark : styles.childrenContainerLight
        }
      >
        <Hero />
        <Me />
        <About />
        <HardSkills />
        <Technologies />
        {/* <SoftSkills /> */}
        {/* <Stats /> */}
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
        {/* <BsFillTriangleFill size={25} color='#89ffe5' /> */}
        {items.map(({ name, icon, isActive }, index) => (
          <HashLink key={name} to={paths[index]} className={styles.link} smooth>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: (index + 1) * 0.1,
                duration: 0.2,
              }}
            >
              <button
                className={`${
                  isActive
                    ? isDark
                      ? styles.navItemButtonActiveDark
                      : styles.navItemButtonActiveLight
                    : styles.navItemButton
                }`}
                onClick={() => {
                  handleDisplayDrawer();
                }}
              >
                {icon}
                <Typography
                  className={
                    isDark
                      ? styles.navItemTextActiveDark
                      : styles.navItemTextActiveLight
                  }
                >
                  {name}
                </Typography>
              </button>
            </motion.div>
          </HashLink>
        ))}

        <div className={styles.linksContainer}>
          <button onClick={switchTheme}>
            {isDark ? <BsFillSunFill size={20} /> : <BsMoon size={18} />}
          </button>
        </div>
      </Drawer>
    </div>
  );
};
