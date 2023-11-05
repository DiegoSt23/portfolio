import { Accordion } from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import { hardSkillsData } from '../../data/data';
import styles from './hard-skills.module.scss';

export const HardSkills = () => (
  <ViewLayout id='hard-skills' title='Hard Skills'>
    <div className={styles.hardSkillsMainContainer}>
      <div className={styles.subContainer}>
        <Accordion items={hardSkillsData} singleOpen />
      </div>
    </div>
  </ViewLayout>
);
