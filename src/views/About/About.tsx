import { Parallax } from 'react-scroll-parallax';
import { Typography, useTheme } from 'diego-react-delta-ui';
import { useTranslation } from 'react-i18next';
import { ViewLayout } from '../../components';
import styles from './about.module.scss';

export const About = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <ViewLayout id='about' title={t('about.title')}>
      <Parallax speed={20} className={styles.aboutMainContainer}>
        <div className={styles.about}>
          <div className={styles.textContainer}>
            <Typography className={styles.text} type='paragraph'>
              {t('about.line1')}
            </Typography>
            <a
              href='https://www.blackstone.studio/'
              className={styles[`link${theme}`]}
              target='_blank'
            >
              {'  '}
              Blackstone Studio
            </a>
            <Typography className={styles.text} type='paragraph'>
              {t('about.line2')}
            </Typography>
            <br />
            <br />
            <Typography type='paragraph'>{t('about.line3')}</Typography>
          </div>
        </div>
      </Parallax>
    </ViewLayout>
  );
};
