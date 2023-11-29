import { motion, useScroll } from 'framer-motion';
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';
import { useTheme, Typography, useWindowDimensions } from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import backgroundDark from '../../assets/images/skylar.jpg';
import backgroundLight from '../../assets/images/white-background.jpg';
import img from '../../assets/images/diego-2.jpg';
import imgLight from '../../assets/images/diego-light.jpg';
import styles from './hero.module.scss';

export const Hero = () => {
  const { theme } = useTheme();
  const { scrollY } = useScroll();
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
          <Parallax speed={20} className={styles.imgContainer}>
            <motion.img
              src={isDark ? img : imgLight}
              alt='Diego'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              style={{ filter: `brightness(${isDark ? 0.6 : 1})` }}
            />
          </Parallax>
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
                Hello!
              </Typography>
              <Typography type='heading1' className={styles.title}>
                I'm Diego
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
                  Front-End Developer
                </Typography>
              </motion.div>
            </Parallax>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            duration: 0.5,
          }}
          className={styles.scrollDown}
          style={{ translateY: scrollY }}
        />
      </ParallaxBanner>
    </ViewLayout>
  );
};
