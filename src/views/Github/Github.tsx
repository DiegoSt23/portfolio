import GitHubCalendar from 'react-github-calendar';
import { Typography, useWindowDimensions, Link } from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import styles from './github.module.scss';

export const GitHub = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 900;

  return (
    <ViewLayout id='github' title='GitHub Heatmap'>
      <div className={styles.githubMainContainer}>
        <Typography type={isMobile ? 'subtitle' : 'heading3'}>2022</Typography>
        <GitHubCalendar
          hideColorLegend
          hideMonthLabels
          hideTotalCount
          year={2022}
          username='diegoSt23'
          blockSize={15}
        />
        <Typography type={isMobile ? 'subtitle' : 'heading3'}>2023</Typography>
        <GitHubCalendar
          hideColorLegend
          hideMonthLabels
          hideTotalCount
          username='diegoSt23'
          blockSize={15}
        />
        <div className={styles.text}>
          <Typography type='paragraph2'>powered by</Typography>
          <Link
            variant='paragraph2'
            href='https://grubersjoe.github.io/react-github-calendar/'
          >
            react-github-calendar
          </Link>
        </div>
      </div>
    </ViewLayout>
  );
};
