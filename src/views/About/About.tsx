import { Parallax } from 'react-scroll-parallax';
import { Typography, useTheme } from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import styles from './about.module.scss';

export const About = () => {
  const { theme } = useTheme();

  return (
    <ViewLayout id='about' title='About' parallaxEffectTitle={false}>
      <Parallax speed={15} className={styles.aboutMainContainer}>
        <div className={styles.about}>
          <div className={styles.textContainer}>
            <Typography className={styles.text} type='paragraph'>
              As a Front-End Developer specialized in React JS with Typescript
              at
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
              , I am responsible for crafting visually engaging and functionally
              robust web and mobile applications using a variety of cutting-edge
              technologies. My role involves working on diverse projects
              spanning different domains, including real estate, e-commerce,
              technology, fitness & wellness, among others.
            </Typography>
            <br />
            <br />
            <Typography type='paragraph'>
              Driven by a strong problem-solving aptitude, a keen eye for detail
              and a passion for crafting elegant and performant web and mobile
              applications I take pride in delivering high-quality code that not
              only meets project requirements but also adheres to best coding
              practices and standards.
            </Typography>
          </div>
          <br />
          <div className={styles.textContainer}>
            <Typography type='paragraph'>
              My commitment to writing clean, maintainable code, coupled with a
              strong foundation in UI/UX principles and my passion for
              continuous learning and innovation empowers me to embrace
              challenges and find creative solutions to complex development
              tasks.
            </Typography>
            <br />
            <Typography type='paragraph'>
              In my toolkit, React's component-based architecture is my go-to
              canvas, allowing me to piece together intricate user interfaces
              that seamlessly blend creativity with functionality.
            </Typography>
            <br />
            <Typography type='paragraph'>
              I thrive on collaborating with designers, product managers, and
              fellow developers to bring ideas to life in an agile and
              collaborative environment.
            </Typography>
          </div>
        </div>
      </Parallax>
    </ViewLayout>
  );
};
