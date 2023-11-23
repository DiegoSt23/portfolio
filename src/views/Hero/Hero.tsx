import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';
import { useTheme, Typography } from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import backgroundDark from '../../assets/images/skylar.jpg';
import backgroundLight from '../../assets/images/white-background.jpg';
import img from '../../assets/images/diego-2.jpg';
import styles from './hero.module.scss';

export const Hero = () => {
  const { theme } = useTheme();
  const { ref, inView } = useInView();
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <ViewLayout id='home'>
      <ParallaxBanner
        layers={[
          {
            image: theme === 'Dark' ? backgroundDark : backgroundLight,
            speed: -15,
          },
        ]}
        className={styles.heroMainContainer}
      >
        <div className={styles.contentContainer} ref={ref}>
          {isInView && (
            <>
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
                  <Typography type='heading3'>Hello!</Typography>
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
                  >
                    <Typography
                      type='heading3'
                      className={styles[`subtitle${theme}`]}
                    >
                      Front-End Developer
                    </Typography>
                  </motion.div>
                </Parallax>
              </motion.div>
              <Parallax speed={20}>
                <motion.img
                  src={img}
                  alt='Diego'
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.7,
                  }}
                />
              </Parallax>
            </>
          )}
        </div>
      </ParallaxBanner>
    </ViewLayout>
  );
};
