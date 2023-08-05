import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tooltip } from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import { technologiesData } from '../../data/data';
import styles from './technologies.module.scss';

export const Technologies = () => {
  const { ref, inView } = useInView();
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <ViewLayout id='technologies' title='Technologies'>
      <div className={styles.technologiesMainContainer} ref={ref}>
        {isInView && (
          <div className={styles.technologiesContainer}>
            {technologiesData.map((tech, index) => (
              <motion.div
                className={styles.techContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Tooltip tooltipContent={tech.name}>{tech.Icon}</Tooltip>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </ViewLayout>
  );
};
