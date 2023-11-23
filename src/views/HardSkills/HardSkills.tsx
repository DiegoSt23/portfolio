import { Parallax } from 'react-scroll-parallax';
import { Accordion } from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import { hardSkillsData } from '../../data/data';
import styles from './hard-skills.module.scss';

const data = hardSkillsData.map((item) => ({
  ...item,
  titleClassName: styles.title,
}));

export const HardSkills = () => (
  <ViewLayout id='hard-skills' title='Hard Skills'>
    <Parallax speed={15} className={styles.hardSkillsMainContainer}>
      <div className={styles.subContainer}>
        <Accordion items={data} singleOpen />
      </div>
    </Parallax>
  </ViewLayout>
);
