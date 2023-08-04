import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Progress, Card } from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import { statsData } from '../../data/data';
import styles from './stats.module.scss';

export const Stats = () => {
  const { ref, inView } = useInView();
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <ViewLayout id='stats' title='Stats'>
      <div className={styles.statsMainContainer} ref={ref}>
        {isInView &&
          statsData?.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.statContainer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.4, duration: 1 }}
            >
              <Card
                headerTitle={item.title}
                headerElement={item.Icon}
                mainContainerClassName={styles.card}
                fullWidth
              >
                <Progress
                  total={100}
                  progress={item.percent}
                  progressColor='#31dab5'
                  displayTooltip
                />
              </Card>
            </motion.div>
          ))}
      </div>
    </ViewLayout>
  );
};
