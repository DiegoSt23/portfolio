import { BsFillTriangleFill } from 'react-icons/bs';
import { ViewLayout } from '../../components';
import styles from './hero.module.scss';

export const Hero = () => (
  <ViewLayout id='home'>
    <div className={styles.heroMainContainer}>
      <BsFillTriangleFill size={35} color='#31dab5' />
    </div>
  </ViewLayout>
);
