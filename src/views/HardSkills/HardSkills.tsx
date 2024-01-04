import { Parallax } from 'react-scroll-parallax';
import { useTranslation } from 'react-i18next';
import { Accordion, Typography } from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import styles from './hard-skills.module.scss';

export const HardSkills = () => {
  const { t } = useTranslation();

  const hardSkillsData = [
    {
      title: t('hardSkills.one.title'),
      content: <Typography>{t('hardSkills.one.description')}</Typography>,
    },
    {
      title: t('hardSkills.two.title'),
      content: <Typography>{t('hardSkills.two.description')}</Typography>,
    },
    {
      title: t('hardSkills.three.title'),
      content: <Typography>{t('hardSkills.three.description')}</Typography>,
    },
    {
      title: t('hardSkills.four.title'),
      content: <Typography>{t('hardSkills.four.description')}</Typography>,
    },
    {
      title: t('hardSkills.five.title'),
      content: <Typography>{t('hardSkills.five.description')}</Typography>,
    },
    {
      title: t('hardSkills.six.title'),
      content: <Typography>{t('hardSkills.six.description')}</Typography>,
    },
    {
      title: t('hardSkills.seven.title'),
      content: <Typography>{t('hardSkills.seven.description')}</Typography>,
    },
    {
      title: t('hardSkills.eight.title'),
      content: <Typography>{t('hardSkills.eight.description')}</Typography>,
    },
    {
      title: t('hardSkills.nine.title'),
      content: <Typography>{t('hardSkills.nine.description')}</Typography>,
    },
    {
      title: t('hardSkills.ten.title'),
      content: <Typography>{t('hardSkills.ten.description')}</Typography>,
    },
  ];

  const data = hardSkillsData.map((item) => ({
    ...item,
    titleClassName: styles.title,
  }));

  return (
    <ViewLayout id='hard-skills' title={t('hardSkills.title')}>
      <Parallax speed={20} className={styles.hardSkillsMainContainer}>
        <div className={styles.subContainer}>
          <Accordion items={data} singleOpen />
        </div>
      </Parallax>
    </ViewLayout>
  );
};
