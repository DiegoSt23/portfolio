import { useRef } from 'react';
import { motion, useScroll, useTransform, easeInOut } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaHtml5, FaReact, FaSass } from 'react-icons/fa';
import { BiLogoTypescript, BiLayout } from 'react-icons/bi';
import { FaSquareGit, FaPerson } from 'react-icons/fa6';
import { SiJest, SiAxios } from 'react-icons/si';
import { BsBrowserChrome, BsLightningChargeFill } from 'react-icons/bs';
import { HiCommandLine } from 'react-icons/hi2';
import { useParallax } from '@/helpers';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';

const iconProps = { size: 25 };

export const HardSkills = () => {
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: titleContainerRef,
    offset: ['start end', 'end start'],
  });
  const y = useParallax(scrollYProgress, 300);
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
      icon: <BiLogoTypescript {...iconProps} />,
    },
    {
      title: t('hardSkills.two.title'),
      content: t('hardSkills.two.description'),
      icon: <FaReact {...iconProps} />,
    },
    {
      title: t('hardSkills.three.title'),
      content: t('hardSkills.three.description'),
      icon: <FaHtml5 {...iconProps} />,
    },
    {
      title: t('hardSkills.four.title'),
      content: t('hardSkills.four.description'),
      icon: <BiLayout {...iconProps} />,
    },
    {
      title: t('hardSkills.five.title'),
      content: t('hardSkills.five.description'),
      icon: <BsLightningChargeFill size={22} />,
    },
    {
      title: t('hardSkills.six.title'),
      content: t('hardSkills.six.description'),
      icon: <FaSquareGit {...iconProps} />,
    },
    {
      title: t('hardSkills.seven.title'),
      content: t('hardSkills.seven.description'),
      icon: <SiJest {...iconProps} />,
    },
    {
      title: t('hardSkills.eight.title'),
      content: t('hardSkills.eight.description'),
      icon: <SiAxios {...iconProps} />,
    },
    {
      title: t('hardSkills.nine.title'),
      content: t('hardSkills.nine.description'),
      icon: <FaPerson {...iconProps} />,
    },
    {
      title: t('hardSkills.ten.title'),
      content: t('hardSkills.ten.description'),
      icon: <BsBrowserChrome {...iconProps} />,
    },
    {
      title: t('hardSkills.eleven.title'),
      content: t('hardSkills.eleven.description'),
      icon: <FaSass {...iconProps} />,
    },
    {
      title: t('hardSkills.twelve.title'),
      content: t('hardSkills.twelve.description'),
      icon: <HiCommandLine {...iconProps} />,
    },
  ];

  return (
    <>
      <div
        ref={titleContainerRef}
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
      <div
        ref={skillsContainerRef}
        className='mx-auto flex flex-col w-full items-center'
      >
        {hardSkillsData.map(({ title, content }, index) => (
          <motion.div
            key={title}
            className={`w-full flex items-center justify-center h-dvh sticky top-0 z-10 bg-neutral-50 dark:bg-neutral-950 px-[1rem] border-t border-neutral-200 dark:border-neutral-800 overflow-hidden`}
          >
            <p className='absolute text-[40rem] md:text-[50rem] font-black top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 text-neutral-200 dark:text-muted'>
              {index + 1}
            </p>
            <div className='max-w-2xl p-5 relative'>
              <div className='flex flex-col items-center'>
                {/* {icon} */}
                <p className='text-2xl font-semibold leading-none tracking-tight text-center'>
                  {title}
                </p>
              </div>
              <p className='text-sm md:text-lg dark:text-muted-foreground mt-6'>
                {content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};
