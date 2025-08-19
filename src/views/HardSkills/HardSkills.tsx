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
import { MagicCard } from '@/components/magicui/magic-card';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context';

const iconProps = { size: 20 };

export const HardSkills = () => {
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { theme } = useTheme();
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
  const magicCardProps = {
    className: 'w-full p-4 flex flex-col',
    gradientColor: theme === 'dark' ? '#36393e' : '#dcdcdc',
  };
  const magicCardContentContainerClassName = 'flex justify-between items-start gap-4';
  const magicCardTitleClassName = 'className="text-lg font-bold';
  const magicCardDescriptionClassName = 'text-sm text-muted-foreground mt-4';

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
        className='mx-auto flex flex-col gap-[300px] h-[50%] max-w-6xl items-center px-[1rem] pt-[0rem] pb-5 md:pb-[40px] p-5'
      >
        <motion.div className={`w-full md:w-1/2 sticky top-5 md:top-[40px] z-10`}>
          <MagicCard {...magicCardProps}>
            <div className={magicCardContentContainerClassName}>
              <p className={magicCardTitleClassName}>
                {hardSkillsData[0].title}
              </p>
              {hardSkillsData[0].icon}
            </div>
            <p className={magicCardDescriptionClassName}>
              {hardSkillsData[0].content}
            </p>
          </MagicCard>
        </motion.div>
        <motion.div className={`w-full md:w-1/2 sticky top-5 md:top-[80px] z-10`}>
          <MagicCard {...magicCardProps}>
            <div className={magicCardContentContainerClassName}>
              <p className={magicCardTitleClassName}>
                {hardSkillsData[1].title}
              </p>
              {hardSkillsData[1].icon}
            </div>
            <p className={magicCardDescriptionClassName}>
              {hardSkillsData[1].content}
            </p>
          </MagicCard>
        </motion.div>
        <motion.div className={`w-full md:w-1/2 sticky top-5 md:top-[120px] z-10`}>
          <MagicCard {...magicCardProps}>
            <div className={magicCardContentContainerClassName}>
              <p className={magicCardTitleClassName}>
                {hardSkillsData[2].title}
              </p>
              {hardSkillsData[2].icon}
            </div>
            <p className={magicCardDescriptionClassName}>
              {hardSkillsData[2].content}
            </p>
          </MagicCard>
        </motion.div>
        <motion.div className={`w-full md:w-1/2 sticky top-5 md:top-[160px] z-10`}>
          <MagicCard {...magicCardProps}>
            <div className={magicCardContentContainerClassName}>
              <p className={magicCardTitleClassName}>
                {hardSkillsData[3].title}
              </p>
              {hardSkillsData[3].icon}
            </div>
            <p className={magicCardDescriptionClassName}>
              {hardSkillsData[3].content}
            </p>
          </MagicCard>
        </motion.div>
        <motion.div className={`w-full md:w-1/2 sticky top-5 md:top-[200px] z-10`}>
          <MagicCard {...magicCardProps}>
            <div className={magicCardContentContainerClassName}>
              <p className={magicCardTitleClassName}>
                {hardSkillsData[4].title}
              </p>
              {hardSkillsData[4].icon}
            </div>
            <p className={magicCardDescriptionClassName}>
              {hardSkillsData[4].content}
            </p>
          </MagicCard>
        </motion.div>
        <motion.div className={`w-full md:w-1/2 sticky top-5 md:top-[240px] z-10`}>
          <MagicCard {...magicCardProps}>
            <div className={magicCardContentContainerClassName}>
              <p className={magicCardTitleClassName}>
                {hardSkillsData[5].title}
              </p>
              {hardSkillsData[5].icon}
            </div>
            <p className={magicCardDescriptionClassName}>
              {hardSkillsData[5].content}
            </p>
          </MagicCard>
        </motion.div>
        <motion.div className={`w-full md:w-1/2 sticky top-5 md:top-[280px] z-10`}>
          <MagicCard {...magicCardProps}>
            <div className={magicCardContentContainerClassName}>
              <p className={magicCardTitleClassName}>
                {hardSkillsData[6].title}
              </p>
              {hardSkillsData[6].icon}
            </div>
            <p className={magicCardDescriptionClassName}>
              {hardSkillsData[6].content}
            </p>
          </MagicCard>
        </motion.div>
        <motion.div className={`w-full md:w-1/2 sticky top-5 md:top-[320px] z-10`}>
          <MagicCard {...magicCardProps}>
            <div className={magicCardContentContainerClassName}>
              <p className={magicCardTitleClassName}>
                {hardSkillsData[7].title}
              </p>
              {hardSkillsData[7].icon}
            </div>
            <p className={magicCardDescriptionClassName}>
              {hardSkillsData[7].content}
            </p>
          </MagicCard>
        </motion.div>
        <motion.div className={`w-full md:w-1/2 sticky top-5 md:top-[360px] z-10`}>
          <MagicCard {...magicCardProps}>
            <div className={magicCardContentContainerClassName}>
              <p className={magicCardTitleClassName}>
                {hardSkillsData[8].title}
              </p>
              {hardSkillsData[8].icon}
            </div>
            <p className={magicCardDescriptionClassName}>
              {hardSkillsData[8].content}
            </p>
          </MagicCard>
        </motion.div>
        <motion.div className={`w-full md:w-1/2 sticky top-5 md:top-[400px] z-10`}>
          <MagicCard {...magicCardProps}>
            <div className={magicCardContentContainerClassName}>
              <p className={magicCardTitleClassName}>
                {hardSkillsData[9].title}
              </p>
              {hardSkillsData[9].icon}
            </div>
            <p className={magicCardDescriptionClassName}>
              {hardSkillsData[9].content}
            </p>
          </MagicCard>
        </motion.div>
        <motion.div className={`w-full md:w-1/2 sticky top-5 md:top-[440px] z-10`}>
          <MagicCard {...magicCardProps}>
            <div className={magicCardContentContainerClassName}>
              <p className={magicCardTitleClassName}>
                {hardSkillsData[10].title}
              </p>
              {hardSkillsData[10].icon}
            </div>
            <p className={magicCardDescriptionClassName}>
              {hardSkillsData[10].content}
            </p>
          </MagicCard>
        </motion.div>
        <motion.div className={`w-full md:w-1/2 sticky top-5 md:top-[480px] z-10`}>
          <MagicCard {...magicCardProps}>
            <div className={magicCardContentContainerClassName}>
              <p className={magicCardTitleClassName}>
                {hardSkillsData[11].title}
              </p>
              {hardSkillsData[11].icon}
            </div>
            <p className={magicCardDescriptionClassName}>
              {hardSkillsData[11].content}
            </p>
          </MagicCard>
        </motion.div>
      </div>
    </>
  );
};
