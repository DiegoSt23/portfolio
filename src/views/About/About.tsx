import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Typography } from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import styles from './about.module.scss';

export const About = () => {
  const { ref, inView } = useInView();
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <ViewLayout id='about' title='About'>
      <div className={styles.aboutMainContainer}>
        <div className={styles.about} ref={ref}>
          {isInView && (
            <>
              <motion.div
                className={styles.textContainer}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.7,
                }}
              >
                <Typography className={styles.text} type='paragraph'>
                  A Front-End Developer based in Mexico specialized in modern
                  React.js with TypeScript.
                </Typography>
                <br />
                <Typography className={styles.text} type='paragraph'>
                  Equipped with an in-depth understanding of TypeScript, I
                  embrace type safety and modern development practices to ensure
                  the highest quality codebase. My expertise in front-end
                  development extends to crafting responsive layouts, beautiful
                  interfaces and optimizing performance.
                </Typography>
                <br />
                <Typography className={styles.text} type='paragraph'>
                  Driven by a strong problem-solving aptitude, a keen eye for
                  detail and a passion for crafting elegant and performant web
                  and mobile applications I take pride in delivering
                  high-quality code that not only meets project requirements but
                  also adheres to best coding practices and standards.
                </Typography>
              </motion.div>
              <br />
              <motion.div
                className={styles.textContainer}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.7,
                }}
              >
                <Typography className={styles.text} type='paragraph'>
                  My commitment to writing clean, maintainable code, coupled
                  with a strong foundation in UI/UX principles and my passion
                  for continuous learning and innovation empowers me to embrace
                  challenges and find creative solutions to complex development
                  tasks.
                </Typography>
                <br />
                <Typography className={styles.text} type='paragraph'>
                  In my toolkit, React's component-based architecture is my
                  go-to canvas, allowing me to piece together intricate user
                  interfaces that seamlessly blend creativity with
                  functionality. I thrive on collaborating with designers,
                  product managers, and fellow developers to bring ideas to life
                  in an agile and collaborative environment.
                </Typography>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </ViewLayout>
  );
};
