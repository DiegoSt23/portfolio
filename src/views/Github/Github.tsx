import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { ResponsiveCalendar } from '@nivo/calendar';
import { Parallax } from 'react-scroll-parallax';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  Card,
  Spinner,
  useWindowDimensions,
  useTheme,
} from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import styles from './github.module.scss';

interface WeekProps {
  color: string;
  contributionCount: number;
  date: string;
}

interface WeeksProps {
  contributionDays: WeekProps[];
}

interface ItemProps {
  day: string;
  value: number;
  color: string;
}

const getActivity2022 = gql`
  query {
    user(login: "diegoSt23") {
      name
      contributionsCollection(
        to: "2022-12-31T01:01:00"
        from: "2022-01-01T01:01:00"
      ) {
        contributionCalendar {
          colors
          totalContributions
          weeks {
            contributionDays {
              color
              contributionCount
              date
              weekday
            }
            firstDay
          }
        }
      }
    }
  }
`;

const getActivity2023 = gql`
  query {
    user(login: "diegoSt23") {
      name
      contributionsCollection {
        contributionCalendar {
          colors
          totalContributions
          weeks {
            contributionDays {
              color
              contributionCount
              date
              weekday
            }
            firstDay
          }
        }
      }
    }
  }
`;

export const GitHub = () => {
  const { isDark, theme } = useTheme();
  const { t } = useTranslation();
  const { loading: loading2022, data: data2022 } = useQuery(getActivity2022);
  const { loading: loading2023, data: data2023 } = useQuery(getActivity2023);
  const [localData, setLocalData] = useState<ItemProps[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0); 
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  useEffect(() => {
    if (data2023?.user && data2022?.user) {
      const formattedData2022 =
        data2022.user.contributionsCollection?.contributionCalendar?.weeks
          .map((item: WeeksProps) => item.contributionDays)
          .flat()
          .map((item: WeekProps) => ({
            day: item.date,
            value: item.contributionCount,
            color: item.color,
          }));
      const formattedData2023 =
        data2023.user.contributionsCollection?.contributionCalendar?.weeks
          .map((item: WeeksProps) => item.contributionDays)
          .flat()
          .map((item: WeekProps) => ({
            day: item.date,
            value: item.contributionCount,
            color: item.color,
          }));
      const all = formattedData2022
        ?.concat(formattedData2023)
        .filter((item: ItemProps) => item.value !== 0);
      const uniqueDates = all.reduce(
        (acc: Record<string, ItemProps>, item: ItemProps) => {
          const key = item.day as string;
          if (!acc[key]) {
            acc[key] = item;
          }
          return acc;
        }, {});
      const uniqueArray: ItemProps[] = Object.values(uniqueDates);
      const totalContributions =
        data2022.user.contributionsCollection?.contributionCalendar
          .totalContributions +
        data2023.user.contributionsCollection?.contributionCalendar
          .totalContributions;

      setLocalData(uniqueArray);
      setTotalContributions(totalContributions);
    }
  }, [data2023?.user, data2022?.user]);

  return (
    <ViewLayout id='github' title={t('github.title')}>
      <Parallax speed={20} className={styles.githubMainContainer}>
        <Card
          headerElement={
            <div className={styles.totalContainer}>
              <Typography type='paragraph'>Total:</Typography>
              <Typography type='subtitle'>
                {`${totalContributions.toString()}`}
              </Typography>
            </div>
          }
          fullWidth
          mainContainerClassName={styles.card}
        >
          {(!loading2023 || !loading2022) && localData?.length ? (
            <div
              style={{
                height: isMobile ? 350 : 450,
                width: '100%',
              }}
            >
              <ResponsiveCalendar
                data={localData}
                from='2023-01-01'
                to={new Date().toDateString()}
                direction='horizontal'
                emptyColor={isDark ? '#1b1b1b' : '#f3f3f3'}
                colors={
                  isDark
                    ? ['#216e39', '#30a14e', '#40c463', '#9be9a8']
                    : ['#e61a43', '#ff345c', '#ff6180', '#ff8ea5']
                }
                theme={{
                  labels: { text: { fill: '#888888' } },
                }}
                margin={{
                  top: isMobile ? 20 : 30,
                  right: isMobile ? 0 : 40,
                  bottom: isMobile ? 0 : 10,
                  left: isMobile ? 0 : 40,
                }}
                yearSpacing={60}
                monthBorderColor='#000000'
                monthBorderWidth={0}
                dayBorderWidth={1}
                dayBorderColor={isDark ? '#121212' : '#fff'}
                tooltip={(info) => {
                  return (
                    <div className={styles[`tooltip${theme}`]}>
                      <div className={styles.row}>
                        <p className={styles.label}>{t('github.date')}</p>
                        <p className={styles.value}>
                          {new Date(
                            info.day.replace(/-/g, '/')
                          ).toLocaleDateString('en', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                      <div className={styles.row}>
                        <p className={styles.label}>
                          {t('github.contributions')}
                        </p>
                        <p className={styles.value}>{info.value}</p>
                      </div>
                    </div>
                  );
                }}
              />
            </div>
          ) : (
            <div className={styles.spinnerContainer}>
              <Spinner />
            </div>
          )}
        </Card>
      </Parallax>
    </ViewLayout>
  );
};
