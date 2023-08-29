import { Typography, Card } from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import img from '../../assets/images/diego.jpg';
import styles from './about.module.scss';

export const About = () => (
  <ViewLayout id='about' title='About'>
    <div className={styles.aboutMainContainer}>
      <Card
        fullWidth
        headerTitle="Hey, I'm Diego"
        titleClassName={styles.title}
      >
        <div className={styles.contentContainer}>
          <div className={styles.imgContainer}>
            <img src={img} alt='Diego' />
          </div>
          <div className={styles.infoContainer}>
            <Typography className={styles.text} type='paragraph'>
              A Front-End Developer based in Mexico specialized in modern
              React.js with TypeScript.
            </Typography>
            <br />
            <Typography className={styles.text} type='paragraph'>
              Driven by a strong problem-solving aptitude, a keen eye for detail
              and a passion for crafting elegant and performant web and mobile
              applications I take pride in delivering high-quality code that not
              only meets project requirements but also adheres to best coding
              practices and standards.
            </Typography>
            <br />
            <Typography className={styles.text} type='paragraph'>
              My commitment to writing clean, maintainable code, coupled with a
              strong foundation in UI/UX principles and my passion for
              continuous learning and innovation empowers me to embrace
              challenges and find creative solutions to complex development
              tasks.
            </Typography>
            {/* <br /> */}
            {/* <Typography className={styles.text} type='paragraph'>
            As a dedicated front-end developer, I am committed to delivering
            exceptional results and contributing to the success of any team I
            work with.
          </Typography> */}
          </div>
        </div>
      </Card>
    </div>
  </ViewLayout>
);
