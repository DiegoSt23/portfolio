import { useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { Pivot as Hamburger } from 'hamburger-react';
import { useTranslation } from 'react-i18next';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { RiHomeLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { GoStack } from 'react-icons/go';
import {
  BsFillGridFill,
  BsFillSunFill,
  BsMoon,
  BsTwitterX,
  BsFillTriangleFill,
} from 'react-icons/bs';
import { IoPersonSharp } from 'react-icons/io5';
import { FaCode } from 'react-icons/fa6';
import {
  Drawer,
  useWindowDimensions,
  SideNavBar,
  Typography,
  Link,
  useTheme,
} from 'diego-react-delta-ui';
import {  
  Hero,
  About,
  HardSkills,
  Technologies,
  Projects,
  GitHub,
  Contact,
  NonPersonalProjects,
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
  const { i18n, t } = useTranslation();
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [displayLoader, setDisplayLoader] = useState<boolean>(true);
  const [currentLang, setCurrentLang] = useState<'en' | 'es'>('en');
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

  const handleSwitchLanguage = () => {
    if (currentLang === 'en') {
      setCurrentLang('es');
      i18n.changeLanguage('es');
      return;
    }

    setCurrentLang('en');
    i18n.changeLanguage('en');
  };

  const handleDisplayDrawer = () => setIsOpen(!isOpen);

  const handleIsActive = (path: string) => path === hash;

  const items = [
    {
      name: t('main.home'),
      icon: <RiHomeLine size={20} />,
      isActive: !hash ? true : handleIsActive('#home'),
      render: ({ icon, isActive }: { icon: ReactNode; isActive: boolean }) => (
        <NavBarItem icon={icon} isActive={isActive} path='#home' />
      ),
    },
    {
      name: t('main.about'),
      icon: <IoPersonSharp size={20} />,
      isActive: handleIsActive('#about'),
      render: ({ icon, isActive }: { icon: ReactNode; isActive: boolean }) => (
        <NavBarItem icon={icon} isActive={isActive} path='#about' />
      ),
    },
    {
      name: t('main.hardSkills'),
      icon: <FaCode size={20} />,
      isActive: handleIsActive('#hard-skills'),
      render: ({ icon, isActive }: { icon: ReactNode; isActive: boolean }) => (
        <NavBarItem icon={icon} isActive={isActive} path='#hard-skills' />
      ),
    },
    {
      name: t('main.technologies'),
      icon: <GoStack size={20} />,
      isActive: handleIsActive('#stack'),
      render: ({ icon, isActive }: { icon: ReactNode; isActive: boolean }) => (
        <NavBarItem icon={icon} isActive={isActive} path='#stack' />
      ),
    },
    {
      name: t('main.projects'),
      icon: <BsFillGridFill size={20} />,
      isActive: handleIsActive('#projects'),
      render: ({ icon, isActive }: { icon: ReactNode; isActive: boolean }) => (
        <NavBarItem icon={icon} isActive={isActive} path='#projects' />
      ),
    },
    {
      name: t('main.github'),
      icon: <AiFillGithub size={20} />,
      isActive: handleIsActive('#github'),
      render: ({ icon, isActive }: { icon: ReactNode; isActive: boolean }) => (
        <NavBarItem icon={icon} isActive={isActive} path='#github' />
      ),
    },
    {
      name: t('main.contact'),
      icon: <BiMessageSquareDetail size={20} />,
      isActive: handleIsActive('#contact'),
      render: ({ icon, isActive }: { icon: ReactNode; isActive: boolean }) => (
        <NavBarItem icon={icon} isActive={isActive} path='#contact' />
      ),
    },
  ];

  const bottomItems = [
    {
      name: t('main.switchLanguage'),
      icon: (
        <button
          className={styles.themeSwitcherButton}
          onClick={handleSwitchLanguage}
        >
          <Typography>{currentLang.toUpperCase()}</Typography>
        </button>
      ),
      isActive: false,
    },
    {
      name: t('main.theme'),
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
    '#about',
    '#hard-skills',
    '#stack',
    '#projects',
    '#github',
    '#contact',
  ];

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      scale: 0.8,
      fill: 'transparent',
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      scale: 1,
      fill: '#fff',
    },
  };

  setTimeout(() => {
    setDisplayLoader(false);
  }, 5000);

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <div className={styles.mainContainer}>
      {displayLoader ? (
        <div className={styles.loaderContainer}>
          <motion.svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
            width={40}
            height={40}
          >
            <motion.path
              d='M 49 0 L 0 85 H 99 L 49 0'
              variants={icon}
              initial='hidden'
              animate='visible'
              stroke='#ffffff'
              strokeWidth={1}
              strokeLinecap='round'
              transition={{
                default: { duration: 4, ease: 'easeInOut' },
                fill: { duration: 4, ease: 'easeInOut' },
              }}
            />
          </motion.svg>
        </div>
      ) : (
        <>
          <motion.div
            className={
              isDark ? styles.barContainerDark : styles.barContainerLight
            }
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{
              delay: 2,
              duration: 0.3,
            }}
          >
            <SideNavBar
              items={items}
              bottomItems={bottomItems}
              mainContainerClassName={styles.navBar}
            />
          </motion.div>
          {!isModalOpen && (
            <button className={styles.menuIcon} onClick={handleDisplayDrawer}>
              <Hamburger
                toggled={isOpen}
                toggle={handleDisplayDrawer}
                size={25}
                color='gray'
              />
            </button>
          )}
          <div
            className={
              isDark
                ? styles.childrenContainerDark
                : styles.childrenContainerLight
            }
          >
            <Hero />
            <About />
            <HardSkills />
            <Technologies />
            <NonPersonalProjects isModalOpen={(val) => setIsModalOpen(val)} />
            <Projects isModalOpen={(val) => setIsModalOpen(val)} />
            <GitHub />
            <Contact />
          </div>
          <Drawer
            position='right'
            isOpen={isOpen}
            onClose={handleDisplayDrawer}
            className={styles.drawer}
          >
            <Typography type='heading4' className={styles.mainTitle}>
              Diego
            </Typography>
            {items.map(({ name, icon, isActive }, index) => (
              <HashLink
                key={name}
                to={paths[index]}
                className={styles.link}
                smooth
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
              </HashLink>
            ))}
            <div className={styles.settings}>
              <Typography type='subtitle'>{t('main.settings')}</Typography>
              <div className={styles.row}>
                <Typography
                  className={
                    isDark
                      ? styles.navItemButtonActiveDark
                      : styles.navItemButtonActiveLight
                  }
                >
                  {t('main.theme')}
                </Typography>
                <button onClick={switchTheme}>
                  {isDark ? <BsFillSunFill size={20} /> : <BsMoon size={18} />}
                </button>
              </div>
              <div className={styles.row}>
                <Typography
                  className={
                    isDark
                      ? styles.navItemButtonActiveDark
                      : styles.navItemButtonActiveLight
                  }
                >
                  {t('main.switchLanguage')}
                </Typography>
                <button onClick={handleSwitchLanguage}>
                  <Typography
                    className={
                      isDark
                        ? styles.navItemButtonActiveDark
                        : styles.navItemButtonActiveLight
                    }
                  >
                    {currentLang.toUpperCase()}
                  </Typography>
                </button>
              </div>
            </div>
            <div className={styles.linksContainer}>
              <Link
                href='https://github.com/DiegoSt23'
                target='_blank'
                className={isDark ? '' : styles.link}
              >
                <AiFillGithub size={20} />
              </Link>
              <Link
                href='https://www.linkedin.com/in/diego-%C3%A1lvarez-garc%C3%ADa/'
                target='_blank'
                className={isDark ? '' : styles.link}
              >
                <AiFillLinkedin size={20} />
              </Link>
              <Link target='_blank' className={isDark ? '' : styles.link}>
                <AiOutlineInstagram size={20} />
              </Link>
              <Link target='_blank' className={isDark ? '' : styles.link}>
                <BsTwitterX size={16} />
              </Link>
              <Link
                href='https://github.com/DiegoSt23/delta-ui'
                target='_blank'
                className={isDark ? '' : styles.link}
              >
                <BsFillTriangleFill size={16} />
              </Link>
            </div>
          </Drawer>
        </>
      )}
    </div>
  );
};
