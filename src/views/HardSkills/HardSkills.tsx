import { Typography } from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import styles from './hard-skills.module.scss';

export const HardSkills = () => (
  <ViewLayout id='hard-skills' title='HardSkills'>
    <div className={styles.hardSkillsMainContainer}>
      <Typography>
        I'm a Front-End Developer based in Mexico, I specialize in modern
        React.js development with TypeScript, leveraging my expertise in React
        Native, Vue.js, JavaScript, CSS, and Sass to deliver exceptional user
        experiences. My proficiency extends to various React libraries, enabling
        me to efficiently integrate and leverage their functionalities to
        enhance application development.
      </Typography>
      <br />
      <Typography>
        I'm committed to staying up-to-date with the latest trends and best
        practices in web development, ensuring that I deliver cutting-edge
        solutions that meet the evolving needs of the industry. Driven by a
        strong problem-solving aptitude, a keen eye for detail and a passion for
        crafting elegant and performant web applications I take pride in
        delivering high-quality code that not only meets project requirements
        but also adheres to best coding practices and standards.
      </Typography>
      <br />
      <Typography>
        My passion for continuous learning and innovation empowers me to embrace
        challenges and find creative solutions to complex development tasks. I
        am excited to contribute my expertise to dynamic projects that push the
        boundaries of web development and make a positive impact on end-users.
        As a dedicated front-end developer, I am committed to delivering
        exceptional results and contributing to the success of any team I work
        with.
      </Typography>
    </div>
  </ViewLayout>
);
