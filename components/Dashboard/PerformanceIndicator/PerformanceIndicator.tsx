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

function PerformanceIndicator(props: PerformanceScoreProps) {
  const { mainTitle, style, progressScore, performanceGrading } = props;
  const [selectedIndex, setSelectedIndex] = useState<IndexPath | IndexPath[]>(
    new IndexPath(0)
  );
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const { userData } = useAuth();

  //@ts-ignore - For some reason Typescript is not detecting the row property and it is clearly mentioned on the UI Kitten component
  //https://akveo.github.io/react-native-ui-kitten/docs/components/select/overview#select
  const currentCategory = performanceGrading[selectedIndex.row];

  let result;

  const handleDateChange = (date: Date) => {
    setCurrentDate(date);
    const selectedWeek = getWeekNumber(date);
    // Handle any additional logic based on the new date
  };

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
        <Calendar onDateChange={handleDateChange} />
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

  // Important: Any metrics that wants to be added here has to be also add in the data.json file for the conditions
  const metrics = {
    dcr: userData.dcr,
    rescue: userData.rescue,
    dsb: userData.dsb,
    mc: userData.morning_checklist,
    dar: userData.dar,
    pod: userData.pod,
    cc: userData.cc,
    sc: userData.sc,
    oa: userData.ontime_attendance,
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
