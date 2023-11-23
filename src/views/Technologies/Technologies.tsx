import { Parallax } from 'react-scroll-parallax';
import { Tooltip, Typography } from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import { technologiesData } from '../../data/data';
import styles from './technologies.module.scss';

const group1 = technologiesData.slice(0, 6);
const group2 = technologiesData.slice(6, 12);
const group3 = technologiesData.slice(12, 18);
const group4 = technologiesData.slice(18, 24);
const group5 = technologiesData.slice(24);

export const Technologies = () => (
  <ViewLayout id='stack' title='Stack'>
    <div className={styles.technologiesMainContainer}>
      <div className={styles.technologiesContainer}>
        <Parallax className={styles.parallax} speed={10}>
          {group1.map((tech) => (
            <div key={tech.name} className={styles.techContainer}>
              <Tooltip tooltipContent={tech.name}>{tech.Icon}</Tooltip>
            </div>
          ))}
        </Parallax>
        <Parallax className={styles.parallax} speed={20}>
          {group2.map((tech) => (
            <div key={tech.name} className={styles.techContainer}>
              <Tooltip tooltipContent={tech.name}>{tech.Icon}</Tooltip>
            </div>
          ))}
        </Parallax>
        <Parallax className={styles.parallax} speed={30}>
          {group3.map((tech) => (
            <div key={tech.name} className={styles.techContainer}>
              <Tooltip tooltipContent={tech.name}>{tech.Icon}</Tooltip>
            </div>
          ))}
        </Parallax>
        <Parallax className={styles.parallax} speed={40}>
          {group4.map((tech) => (
            <div key={tech.name} className={styles.techContainer}>
              <Tooltip tooltipContent={tech.name}>{tech.Icon}</Tooltip>
            </div>
          ))}
        </Parallax>
        <Parallax className={styles.parallax} speed={50}>
          {group5.map((tech) => (
            <div key={tech.name} className={styles.techContainer}>
              <Tooltip tooltipContent={tech.name}>{tech.Icon}</Tooltip>
            </div>
          ))}
        </Parallax>
      </div>
      <Typography type='paragraph3'>among many others</Typography>
    </div>
  </ViewLayout>
);
