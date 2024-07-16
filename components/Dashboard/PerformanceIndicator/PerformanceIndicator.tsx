import Calendar from '@/components/UI/Calendar/Calendar';
import { Card, Select, SelectItem, IndexPath } from '@ui-kitten/components';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { PerformanceScoreProps } from './Interface';
import RadialProgress from '@/components/UI/RadialProgress/RadialProgress';
import { styles } from './Styles';
import { evaluateMetric } from '@/utils/metricUtil';
import { useAuth } from '@/context/authContext';
import { getWeekNumber } from '@/utils/getWeekNumber';
import { getDashboardData } from '@/utils/apiService';

function PerformanceIndicator(props: PerformanceScoreProps) {
  const { mainTitle, style, progressScore, performanceGrading } = props;
  const [selectedIndex, setSelectedIndex] = useState<IndexPath | IndexPath[]>(
    new IndexPath(0)
  );
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const { userData, setUserData } = useAuth();

  //@ts-ignore - For some reason Typescript is not detecting the row property and it is clearly mentioned on the UI Kitten component
  //https://akveo.github.io/react-native-ui-kitten/docs/components/select/overview#select
  const currentCategory = performanceGrading[selectedIndex.row];

  let result;

  const renderSelectItems = () => {
    return performanceGrading.map((category, index) => (
      <SelectItem key={`category-option-${index}`} title={category.name} />
    ));
  };

  const renderCardContent = () => {
    return (
      <>
        <Text style={styles.heading}>{mainTitle}</Text>
        <Select
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
          //@ts-ignore - For some reason Typescript is not detecting the row property and it is clearly mentioned on the UI Kitten component
          //https://akveo.github.io/react-native-ui-kitten/docs/components/select/overview#select
          value={performanceGrading[selectedIndex.row]?.name}
          style={styles.performanceCategory}
        >
          {renderSelectItems()}
        </Select>
        <Calendar onDateChange={handleDateChange} isLoading={isLoading} />
      </>
    );
  };

  // In case we don't have any data to show from that week
  if (!userData) {
    return (
      <View style={[styles.container]}>
        <View style={[styles.container, style]}>
          <Card style={styles.cardContainer}>
            {renderCardContent()}
            <Text>Sorry, we don't have data from this week</Text>
          </Card>
        </View>
      </View>
    );
  }

  const handleDateChange = async (date: Date) => {
    setCurrentDate(date);
    const todayDate = new Date();
    const currentYear = todayDate.getFullYear();
    const selectedWeek = getWeekNumber(date);

    try {
      setIsLoading(true);
      const dashboardData = await getDashboardData(
        userData?.authToken || '',
        currentYear,
        'A1AXYAQM887EIE', // userTransportId, replace with actual userTransportId
        selectedWeek // selectedWeek, replace with actual selectedWeek
      );

      const [foundUserData] = dashboardData.results;

      setUserData((prevState) => {
        if (prevState) {
          return {
            ...prevState,
            dashboard: foundUserData,
          };
        } else {
          return null;
        }
      });
    } catch (error) {
      console.log('🚀 ~ handleDateChange ~ userData:', userData);
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // const handleDateChange = async (date: Date) => {
  //   setCurrentDate(date);
  //   const todayDate = new Date();
  //   const currentYear = todayDate.getFullYear();
  //   const selectedWeek = getWeekNumber(date);

  //   const dashboardData = await getDashboardData(
  //     userData.authToken,
  //     currentYear,
  //     // TODO: replace this with userTransportId and selectedWeek when we have actual data,
  //     'A1AXYAQM887EIE', // userTransportId
  //     21 // selectedWeek
  //   );
  //   const [foundUserData] = dashboardData.results;
  //   setUserData((prevState) => {
  //     ...prevState
  //     dashboard: foundUserData,
  //   });
  // };
  // Important: Any metrics that wants to be added here has to be also add in the data.json file for the conditions
  const metrics = {
    dcr: userData?.dashboard?.dcr,
    rescue: userData?.dashboard?.rescue,
    dsb: userData?.dashboard?.dsb,
    mc: userData?.dashboard?.morning_checklist,
    dar: userData?.dashboard?.dar,
    pod: userData?.dashboard?.pod,
    cc: userData?.dashboard?.cc,
    sc: userData?.dashboard?.sc,
    oa: userData?.dashboard?.ontime_attendance,
  };

  //@ts-ignore
  // Type Error on userScore and we dont know why
  // "¯\\_(ツ)_/¯",
  const userScore = metrics[currentCategory.abbreviation.toLowerCase()];

  const dcrMetric = performanceGrading.find(
    (metric) => metric.abbreviation === currentCategory.abbreviation
  );

  if (dcrMetric) {
    result = evaluateMetric(dcrMetric, userScore);
  }

  return (
    <View style={[styles.container, style]}>
      <Card style={styles.cardContainer}>
        {renderCardContent()}
        <RadialProgress
          percentage={progressScore}
          style={styles.radial}
          color={result?.color}
          value={Math.floor(userScore)}
        />
        <Text style={styles.subHeading}>{result?.title}</Text>
        <Text style={styles.message}>{result?.message}</Text>
      </Card>
    </View>
  );
}

export default PerformanceIndicator;
