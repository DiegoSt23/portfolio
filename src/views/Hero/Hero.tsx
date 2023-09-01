import { BsFillTriangleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { ViewLayout } from '../../components';
import styles from './hero.module.scss';

export const Hero = () => {

  return (
    <ViewLayout id='home'>
      <div className={styles.heroMainContainer}>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
        >
          <BsFillTriangleFill size={60} color='#31DAB5' />
        </motion.div>
      </div>
    </ViewLayout>
  );
};