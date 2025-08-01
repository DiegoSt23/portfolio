import { useRef } from 'react';
import { motion, useScroll, useTransform, easeInOut } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaHtml5, FaReact, FaSass } from 'react-icons/fa';
import { BiLogoTypescript, BiLayout } from 'react-icons/bi';
import { FaSquareGit } from 'react-icons/fa6';
import { SiJest } from 'react-icons/si';
import { BsBrowserChrome, BsLightningChargeFill } from 'react-icons/bs';
import { HiCommandLine } from 'react-icons/hi2';
import { useParallax } from '@/helpers';
import { MagicCard } from '@/components/magicui/magic-card';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context';

const iconProps = { size: 20 };

export const HardSkills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const y = useParallax(scrollYProgress, 200);
  const scale = useTransform(scrollYProgress, [0, 0.5], [300, 1], {
    ease: easeInOut,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1], {
    ease: easeInOut,
  });
  const letterSpacing = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['10em', '-0.025em'],
    { ease: easeInOut }
  );
  const titleProperties = {
    style: {
      scale,
      opacity,
      letterSpacing,
      y,
      pointerEvents: 'none' as const,
    },
    className:
      'z-10 whitespace-pre-wrap text-center text-6xl md:text-7xl font-bold tracking-tighter text-black dark:text-white select-none',
  };
  
  const hardSkillsData = [
    {
      title: t('hardSkills.one.title'),
      content: t('hardSkills.one.description'),
      icon: <FaHtml5 {...iconProps} />,
    },
    {
      title: t('hardSkills.two.title'),
      content: t('hardSkills.two.description'),
      icon: <BiLogoTypescript {...iconProps} />,
    },
    {
      title: t('hardSkills.three.title'),
      content: t('hardSkills.three.description'),
      icon: <BiLayout {...iconProps} />,
    },
    {
      title: t('hardSkills.four.title'),
      content: t('hardSkills.four.description'),
      icon: <FaSquareGit {...iconProps} />,
    },
    {
      title: t('hardSkills.five.title'),
      content: t('hardSkills.five.description'),
      icon: <FaReact size={22} />,
    },
    {
      title: t('hardSkills.six.title'),
      content: t('hardSkills.six.description'),
      icon: <SiJest {...iconProps} />,
    },
    {
      title: t('hardSkills.seven.title'),
      content: t('hardSkills.seven.description'),
      icon: <BsBrowserChrome {...iconProps} />,
    },
    {
      title: t('hardSkills.eight.title'),
      content: t('hardSkills.eight.description'),
      icon: <BsLightningChargeFill {...iconProps} />,
    },
    {
      title: t('hardSkills.nine.title'),
      content: t('hardSkills.nine.description'),
      icon: <FaSass {...iconProps} />,
    },
    {
      title: t('hardSkills.ten.title'),
      content: t('hardSkills.ten.description'),
      icon: <HiCommandLine {...iconProps} />,
    },
  ];

  return (
    <>
      <div
        ref={containerRef}
        className='relative flex flex-col w-full h-[1200px] md:h-dvh items-center justify-center p-20 overflow-x-clip contain-layout'
      >
        <motion.p {...titleProperties}>{t('hardSkills.title')}</motion.p>
        <motion.p {...titleProperties}>{t('hardSkills.title2')}</motion.p>
        <AnimatedGridPattern
          numSquares={50}
          maxOpacity={0.4}
          duration={1}
          repeatDelay={1}
          className={cn(
            '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
            'inset-x-0 inset-y-[-45%] h-[200%] skew-y-12'
          )}
        />
      </div>
      <div className='mx-auto flex flex-col gap-10 h-[50%] max-w-6xl items-center px-[1rem] pt-[0rem] pb-[8rem] p-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
          {hardSkillsData.map(({ title, content, icon }) => (
            <MagicCard
              key={title}
              className='w-full p-4 flex flex-col'
              gradientColor={theme === 'dark' ? '#36393e' : '#dcdcdc'}
            >
              <div className='flex justify-between items-start gap-4'>
                <p className='className="text-lg font-semibold'>{title}</p>
                {icon}
              </div>
              <p className='text-sm text-muted-foreground mt-4'>{content}</p>
            </MagicCard>
          ))}
        </div>
      </div>
    </>
  );
};
