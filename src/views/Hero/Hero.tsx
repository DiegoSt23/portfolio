import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { LiaHackerrank } from 'react-icons/lia';
import { PiSunDim } from 'react-icons/pi';
import { PiMoonStarsLight } from 'react-icons/pi';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { cn } from '@/lib/utils';
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
  const { i18n, t } = useTranslation();
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
    <div className='flex h-dvh w-full flex-col items-center justify-center rounded-lg bg-background md:shadow-xl'>
      <DotPattern
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] rotate-animation'
        )}
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
          <a href='https://github.com/DiegoSt23/delta-ui' target='_blank'>
            <LiaHackerrank size={22} />
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
      <h2 className='text-neutral-400 text-3xl font-semibold tracking-tight'>
        Diego Alvarez
      </h2>
      <BlurIn
        word={t('hero.title')}
        className='text-4xl font-bold text-black dark:text-white'
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.5,
        }}
        className={theme === 'dark' ? 'scrollDownDark' : 'scrollDownLight'}
      />
    </div>
  );
};
