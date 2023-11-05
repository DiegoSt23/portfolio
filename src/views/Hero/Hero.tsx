import { BsFillTriangleFill } from 'react-icons/bs';
import { useTheme } from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import styles from './hero.module.scss';

export const Hero = () => {
  const { isDark, theme } = useTheme();

  return (
    <ViewLayout id='home'>
      <div className={styles.heroMainContainer}>
        <div className={styles[`backgroundImg${theme}`]} />
        <BsFillTriangleFill
          size={40}
          color={isDark ? '#31DAB5' : '#7191f8'}
          style={{ zIndex: 99 }}
        />
      </div>
    </ViewLayout>
  );
};
