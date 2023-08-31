import { ViewLayout } from '../../components';
import { Typography } from 'diego-react-delta-ui';
import img from '../../assets/images/diego.jpg';
import styles from './me.module.scss';

export const Me = () => (
  <ViewLayout id='me'>
    <div className={styles.meMainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.contentSubContainer}>
          <Typography type='heading1' className={styles.title}>
            Hey, I'm Diego
          </Typography>
          <Typography type='heading3' className={styles.subtitle}>
            Front End Developer
          </Typography>
        </div>
        <img src={img} alt="Diego" />
      </div>
    </div>
  </ViewLayout>
);
