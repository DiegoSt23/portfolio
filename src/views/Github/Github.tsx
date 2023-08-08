import GitHubCalendar from 'react-github-calendar';
import { Typography, Link } from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import styles from './github.module.scss';

export const GitHub = () => (
  <ViewLayout id='github' title='GitHub'>
    <div className={styles.githubMainContainer}>
      <Typography type='paragraph' className={styles.title}>
        2022
      </Typography>
      <GitHubCalendar
        hideColorLegend
        hideMonthLabels
        hideTotalCount
        year={2022}
        username='diegoSt23'
        blockSize={15}
      />
      <Typography type='paragraph' className={styles.title}>
        2023
      </Typography>
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
