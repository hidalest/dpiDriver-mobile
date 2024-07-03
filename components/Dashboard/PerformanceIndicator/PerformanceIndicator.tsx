import Calendar from '@/components/UI/Calendar/Calendar';
import { Card, Select, SelectItem, IndexPath } from '@ui-kitten/components';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { PerformanceScoreProps } from './Interface';
import RadialProgress from '@/components/UI/RadialProgress/RadialProgress';
import { styles } from './Styles';
import { evaluateMetric } from '@/utils/metricUtil';
import { useAuth } from '@/context/authContext';

function PerformanceIndicator(props: PerformanceScoreProps) {
  const { mainTitle, style, progressScore, performanceGrading } = props;
  const [selectedIndex, setSelectedIndex] = useState<IndexPath | IndexPath[]>(
    new IndexPath(0)
  );
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const { userData } = useAuth();

  if (!userData) {
    return (
      <View style={[styles.container]}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const { first_name } = userData.driver;
  console.log(
    '🚀 ~ PerformanceIndicator ~ userData.created:',
    userData.created
  );
  // Important: Any metrics that wants to be added has to be also add in the data.json file for the conditions
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
  //@ts-ignore - For some reason Typescript is not detecting the row property and it is clearly mentioned on the UI Kitten component
  //https://akveo.github.io/react-native-ui-kitten/docs/components/select/overview#select
  const currentCategory = performanceGrading[selectedIndex.row];
  let result;

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

  const handleDateChange = (date: Date) => {
    setCurrentDate(date);
    // Handle any additional logic based on the new date
  };

  return (
    <View style={[styles.container, style]}>
      <Card style={styles.cardContainer}>
        <Text style={styles.heading}>{mainTitle}</Text>
        <Select
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
          value={currentCategory.name}
          style={styles.performanceCategory}
        >
          {performanceGrading.map((category, index) => {
            return (
              <SelectItem
                key={`category-option-${index}`}
                title={category.name}
              />
            );
          })}
        </Select>
        <Calendar onDateChange={handleDateChange} />
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
