// import { useState, useEffect } from 'react';
// import { useQuery, gql } from '@apollo/client';
// import { ResponsiveCalendar } from '@nivo/calendar';
import { Typography } from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import styles from './github.module.scss';

// const getActivity = gql`
//   query {
//     user(login: "diegoSt23") {
//       name
//       contributionsCollection {
//         contributionCalendar {
//           colors
//           totalContributions
//           weeks {
//             contributionDays {
//               color
//               contributionCount
//               date
//               weekday
//             }
//             firstDay
//           }
//         }
//       }
//     }
//   }
// `;

// const theme = {
//   text: {
//     fontSize: 11,
//     fill: '#ffffff',
//     outlineWidth: 0,
//     outlineColor: 'transparent',
//   },
//   axis: {
//     legend: {
//       text: {
//         fontSize: 12,
//         fill: '#ffffff',
//         outlineWidth: 0,
//         outlineColor: 'transparent',
//       },
//     },
//     ticks: {
//       line: {
//         stroke: '#ffffff',
//         strokeWidth: 1,
//       },
//       text: {
//         fontSize: 11,
//         fill: '#ffffff',
//         outlineWidth: 0,
//         outlineColor: 'transparent',
//       },
//     },
//   },
// };

export const GitHub = () => {
  // const { loading, data } = useQuery(getActivity);
  // const [localData, setLocalData] = useState([]);
  // const [totalContributions, setTotalContributions] = useState<number>(0); 
  // const { width } = useWindowDimensions();
  // const isMobile = width < 900;

  // useEffect(() => {
  //   if (data?.user) {
  //     const formattedData =
  //       data.user.contributionsCollection?.contributionCalendar?.weeks
  //         .map((item) => item.contributionDays)
  //         .flat()
  //         .map((item) => ({
  //           day: item.date,
  //           value: item.contributionCount,
  //           color: item.value > 6 ? 'red' : 'teal'
  //         }));
  //     // .filter((item) => item.value !== 0);
  //     setLocalData(formattedData);
  //     setTotalContributions(data.user.contributionsCollection?.contributionCalendar.totalContributions)
  //   }
    
  // }, [data?.user]);

  return (
    <ViewLayout id='github' title='GitHub'>
      <div className={styles.githubMainContainer}>
        <Typography type='paragraph'>
          {/* {`Total Contributions: ${totalContributions.toString()}`} */}
          Github
        </Typography>
        {/* {!loading && localData?.length ? (
          <div style={{ height: isMobile ? 900 : 500, width: '100%' }}>
            <ResponsiveCalendar
              data={localData}
              from='2023-01-01'
              to={new Date().toDateString()}
              theme={theme}
              direction={isMobile ? 'vertical' : 'horizontal'}
              minValue={1}
              emptyColor='#3d3d3d'
              // colors={['#c2edd2', '#97eeb7', '#64ff9d', '#00ff5e']}
              margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
              yearSpacing={60}
              monthBorderColor='#000000'
              monthBorderWidth={0}
              dayBorderWidth={0.1}
              dayBorderColor='#000000'
              tooltip={(info) => {
                return (
                  <div className={styles.tooltip}>
                    <div className={styles.row}>
                      <p className={styles.label}>Date:</p>
                      <p className={styles.value}>
                        {new Date(info.day).toLocaleDateString('en', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    <div className={styles.row}>
                      <p className={styles.label}>Contributions:</p>
                      <p className={styles.value}>{info.value}</p>
                    </div>
                  </div>
                );
              }}
            />
          </div>
        ) : (
          <p>loading</p>
        )} */}
      </div>
    </ViewLayout>
  );
};
