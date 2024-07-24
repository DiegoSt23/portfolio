import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { ResponsiveCalendar } from '@nivo/calendar';
import { useTranslation } from 'react-i18next';
import Ripple from '@/components/magicui/ripple';
import { Card } from '@/components/ui/card';
import NumberTicker from '@/components/magicui/number-ticker';
import ShinyButton from '@/components/magicui/shiny-button';
import { useWindowDimensions } from '@/helpers';
import { useTheme } from '@/context';

type WeekProps = {
  color: string;
  contributionCount: number;
  date: string;
}

type WeeksProps = {
  contributionDays: WeekProps[];
}

type ItemProps = {
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
      contributionsCollection(
        to: "2023-12-31T01:01:00"
        from: "2023-01-01T01:01:00"
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

const getActivity2024 = gql`
  query {
    user(login: "diegoSt23") {
      name
      contributionsCollection(
        to: "2024-12-31T01:01:00"
        from: "2024-01-01T01:01:00"
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

export const GitHub = () => {
  const { loading: loading2022, data: data2022 } = useQuery(getActivity2022);
  const { loading: loading2023, data: data2023 } = useQuery(getActivity2023);
  const { loading: loading2024, data: data2024 } = useQuery(getActivity2024);
  const [localData, setLocalData] = useState<ItemProps[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0); 
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const { theme } = useTheme();
  const isMobile = width < 640;

  const handleRedirect = () => {
    window.open('https://github.com/DiegoSt23', '_blank');
  };

  useEffect(() => {
    if (data2023?.user && data2022?.user && data2024?.user) {
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
      const formattedData2024 =
        data2024.user.contributionsCollection?.contributionCalendar?.weeks
          .map((item: WeeksProps) => item.contributionDays)
          .flat()
          .map((item: WeekProps) => ({
            day: item.date,
            value: item.contributionCount,
            color: item.color,
          }));
      const all = formattedData2022
        ?.concat(formattedData2023)
        ?.concat(formattedData2024)
        .filter((item: ItemProps) => item.value !== 0);
      const uniqueDates = all.reduce(
        (acc: Record<string, ItemProps>, item: ItemProps) => {
          const key = item.day as string;
          if (!acc[key]) {
            acc[key] = item;
          }
          return acc;
        },
        {}
      );
      const uniqueArray: ItemProps[] = Object.values(uniqueDates);
      const totalContributions =
        data2022.user.contributionsCollection?.contributionCalendar
          .totalContributions +
        data2023.user.contributionsCollection?.contributionCalendar
          .totalContributions;

      setLocalData(uniqueArray);
      setTotalContributions(totalContributions);
    }
  }, [data2023?.user, data2022?.user, data2024?.user]);

  return (
    <>
      <div className='mx-auto flex flex-col h-[50%] max-w-4xl items-center px-[1rem] pt-[5rem] pb-6 p-2 relative'>
        <h3 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center'>
          {t('github.title')}
        </h3>
        <p className='whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white'>
          <NumberTicker value={totalContributions} />
        </p>
        <Card className='w-full py-4 lg:py-10 mt-8 mb-12'>
          {(!loading2023 || !loading2022 || !loading2024) &&
          localData?.length ? (
            <div
              style={{
                height: isMobile ? 280 : 450,
                width: '100%',
              }}
            >
              <ResponsiveCalendar
                data={localData}
                from='2023-01-01'
                to={new Date().toDateString()}
                direction='horizontal'
                emptyColor={theme === 'dark' ? '#131313' : '#fcfcfc'}
                colors={['#216e39', '#30a14e', '#40c463', '#9be9a8']}
                theme={{
                  labels: { text: { fill: '#888888' } },
                }}
                margin={{
                  top: 30,
                  right: 40,
                  bottom: 10,
                  left: 40,
                }}
                yearSpacing={60}
                monthBorderColor='#000000'
                monthBorderWidth={0}
                dayBorderWidth={1}
                dayBorderColor={theme === 'dark' ? '#252424' : '#ebebeb'}
                tooltip={(info) => (
                  <div className='border py-2 px-4 bg-white dark:bg-black rounded-lg shadow-2xl'>
                    <div className='flex flex-row items-center gap-6 justify-between'>
                      <p className='text-sm text-muted-foreground'>
                        {t('github.date')}
                      </p>
                      <p className='leading-7'>
                        {new Date(
                          info.day.replace(/-/g, '/')
                        ).toLocaleDateString('en', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    <div className='flex flex-row items-center gap-1 justify-between'>
                      <p className='text-sm text-muted-foreground'>
                        {t('github.contributions')}
                      </p>
                      <p className='leading-7'>{info.value}</p>
                    </div>
                  </div>
                )}
              />
            </div>
          ) : (
            <div className='w-full flex justify-center'>
              <p>Loading...</p>
            </div>
          )}
        </Card>
      </div>
      <div className='relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden'>
        <Ripple />
        <p className='z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white'>
          {t('github.visitProfile')}
        </p>
        <div className='relative z-11 mt-4'>
          <ShinyButton
            onClick={handleRedirect}
            text={t('github.visit')}
          />
        </div>
      </div>
    </>
  );
};