import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ViewLayout } from '../../components';
import { Typography } from 'diego-react-delta-ui';
import img from '../../assets/images/diego.jpg';
import styles from './me.module.scss';

export const Me = () => {
  const { ref, inView } = useInView();
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <ViewLayout id='me'>
      <div className={styles.meMainContainer}>
        <div className={styles.contentContainer} ref={ref}>
          {isInView && (
            <motion.div
              className={styles.contentSubContainer}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
            >
              <Typography type='heading1' className={styles.title}>
                Hey, I'm Diego
              </Typography>
              <Typography type='heading3' className={styles.subtitle}>
                frontEndDeveloper
              </Typography>
            </motion.div>
          )}
          {isInView && (
            <motion.img
              src={img}
              alt='Diego'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
            />
          )}
        </div>
      </div>
    </ViewLayout>
  );
};
