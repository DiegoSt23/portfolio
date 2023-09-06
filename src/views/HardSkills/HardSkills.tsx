import { Accordion, useWindowDimensions } from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import { hardSkillsData } from '../../data/data';
import styles from './hard-skills.module.scss';

export const HardSkills = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 900;

  return (
    <ViewLayout id='hard-skills' title='Hard Skills'>
      <div className={styles.hardSkillsMainContainer}>
        {isMobile ? (
          <Accordion items={hardSkillsData} singleOpen />
        ) : (
          <>
            <div className={styles.subContainer}>
              <Accordion items={hardSkillsData.slice(0, 5)} singleOpen />
            </div>
            <div className={styles.subContainer}>
              <Accordion items={hardSkillsData.slice(5)} singleOpen />
            </div>
          </>
        )}
      </div>
    </ViewLayout>
  );
};
