import { motion, useScroll } from 'framer-motion';
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';
import { useTranslation } from 'react-i18next';
import {
  useTheme,
  Typography,
  useWindowDimensions,
  Link,
} from 'diego-react-delta-ui';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import {
  BsFillTriangleFill,
} from 'react-icons/bs';
import { ViewLayout } from '../../components';
import backgroundDark from '../../assets/images/skylar.jpg';
import backgroundLight from '../../assets/images/white.jpg';
import styles from './hero.module.scss';

export const Hero = () => {
  const { theme } = useTheme();
  const { scrollY } = useScroll();
  const { t } = useTranslation();
  const { width } =  useWindowDimensions();
  const isTablet = width < 900;
  const isDark = theme === 'Dark';

  return (
    <ViewLayout id='home'>
      <ParallaxBanner
        layers={[
          {
            image: isDark ? backgroundDark : backgroundLight,
            speed: -15,
          },
        ]}
        className={styles.heroMainContainer}
      >
        <div className={styles.contentContainer}>
          <motion.div
            className={styles.contentSubContainer}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
          >
            <Parallax speed={-25}>
              <Typography type={isTablet ? 'heading4' : 'heading3'}>
                {t('hero.line1')}
              </Typography>
              <Typography type='heading1' className={styles.title}>
                {t('hero.line2')}
              </Typography>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1,
                  duration: 0.7,
                }}
                style={{ translateX: scrollY }}
              >
                <Typography
                  type='heading2'
                  className={styles[`subtitle${theme}`]}
                >
                  {t('hero.line3')}
                </Typography>
              </motion.div>
            </Parallax>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: -80 }}
            transition={{
              delay: 2,
              duration: 0.5,
            }}
            className={styles.linksContainer}
          >
            <Link
              href='https://github.com/DiegoSt23'
              target='_blank'
              className={isDark ? '' : styles.link}
            >
              <AiFillGithub size={25} />
            </Link>
            <Link
              href='https://www.linkedin.com/in/diego-%C3%A1lvarez-garc%C3%ADa/'
              target='_blank'
              className={isDark ? '' : styles.link}
            >
              <AiFillLinkedin size={25} />
            </Link>
            <Link
              href='https://github.com/DiegoSt23/delta-ui'
              target='_blank'
              className={isDark ? '' : styles.link}
            >
              <BsFillTriangleFill size={20} />
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            duration: 0.5,
          }}
          className={isDark ? styles.scrollDownDark : styles.scrollDownLight}
          style={{ translateY: scrollY }}
        />
      </ParallaxBanner>
      <div className={styles.glassBox} />
    </ViewLayout>
  );
};
