import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { PiSunDim } from 'react-icons/pi';
import { PiMoonStarsLight } from 'react-icons/pi';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useParallax } from '@/helpers';
import DotPattern from '@/components/magicui/dot-pattern';
import BlurIn from '@/components/magicui/blur-in';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useTheme } from '@/context';
import { useWindowDimensions } from '@/helpers';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const titleVerticalParallax = useParallax(scrollYProgress, 100);
  const title2VerticalParallax = useParallax(scrollYProgress, 120);
  const title3VerticalParallax = useParallax(scrollYProgress, 150);
  const opacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0]);
  const { i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const { width } = useWindowDimensions();
  const [currentLang, setCurrentLang] = useState<'en' | 'es'>('en');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const isMobile = width < 640;

  const handleSwitchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSwitchLanguage = () => {
    if (currentLang === 'en') {
      setCurrentLang('es');
      i18n.changeLanguage('es');
      return;
    }

    setCurrentLang('en');
    i18n.changeLanguage('en');
  };

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className='flex h-dvh w-full flex-col items-center justify-center rounded-lg bg-background'
    >
      <DotPattern
        className={
          isMobile
            ? '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
            : '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]'
        }
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.5,
        }}
        className='absolute top-3 px-3 flex justify-between md:items-center w-full'
      >
        <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
          <a href='https://github.com/DiegoSt23' target='_blank'>
            <AiFillGithub size={20} />
          </a>
          <a
            href='https://www.linkedin.com/in/diego-alvarez-dev/'
            target='_blank'
          >
            <AiFillLinkedin size={20} />
          </a>
        </div>
        <div className='flex items-center self-start gap-3'>
          <button
            className='h-fit w-fit hidden sm:block'
            onClick={handleSwitchTheme}
          >
            {theme === 'light' ? (
              <PiMoonStarsLight size={22} strokeWidth={2} />
            ) : (
              <PiSunDim size={22} />
            )}
          </button>
          <button
            className='h-fit w-fit hidden sm:block'
            onClick={handleSwitchLanguage}
          >
            <p>{currentLang.toUpperCase()}</p>
          </button>
          <Popover open={menuOpen} onOpenChange={setMenuOpen}>
            <PopoverTrigger asChild className='block sm:hidden cursor-pointer'>
              <button>
                {menuOpen ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
              </button>
            </PopoverTrigger>
            <PopoverContent className='w-fit'>
              <div className='flex flex-col justify-start gap-4'>
                <button className='h-fit w-fit' onClick={handleSwitchTheme}>
                  {theme === 'light' ? (
                    <PiMoonStarsLight size={22} strokeWidth={2} />
                  ) : (
                    <PiSunDim size={22} />
                  )}
                </button>
                <button className='h-fit w-fit' onClick={handleSwitchLanguage}>
                  <p>{currentLang.toUpperCase()}</p>
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </motion.div>
      <BlurIn
        word='DIEGO'
        className='text-4xl font-black text-black dark:text-white'
      />
      <BlurIn
        word='FRONT'
        className='text-9xl font-black text-neutral-400'
        style={{ y: titleVerticalParallax }}
      />
      <BlurIn
        word='END'
        className='text-4xl font-black text-neutral-400'
        style={{ y: title2VerticalParallax }}
      />
      <BlurIn
        word='DEV'
        className='text-4xl font-black text-neutral-400'
        style={{ y: title3VerticalParallax }}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.5,
        }}
        className={theme === 'dark' ? 'scrollDownDark' : 'scrollDownLight'}
        style={{ opacity }}
      />
    </div>
  );
};
