import Calendar from '@/components/UI/Calendar/Calendar';
import { Card, Select, SelectItem, IndexPath } from '@ui-kitten/components';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { PerformanceScoreProps } from './Interface';
import RadialProgress from '@/components/UI/RadialProgress/RadialProgress';
import { styles } from './Styles';
import { evaluateMetric } from '@/utils/metricUtil';

function PerformanceIndicator(props: PerformanceScoreProps) {
  const { mainTitle, style, progressScore, performanceGrading } = props;
  const [selectedIndex, setSelectedIndex] = useState<IndexPath | IndexPath[]>(
    new IndexPath(0)
  );

  //@ts-ignore - For some reason Typescript is not detecting the row property and it is clearly mentioned on the UI Kitten component
  //https://akveo.github.io/react-native-ui-kitten/docs/components/select/overview#select
  const currentCategory = performanceGrading[selectedIndex.row];
  let result;

  const dcrMetric = performanceGrading.find(
    (metric) => metric.abbreviation === currentCategory.abbreviation
  );
  if (dcrMetric) {
    result = evaluateMetric(dcrMetric, progressScore);
  }
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
        <Calendar />
        <RadialProgress
          percentage={progressScore}
          style={styles.radial}
          color={result?.color}
        />
        <Text style={styles.subHeading}>{result?.title}</Text>
        <Text>{result?.message}</Text>
      </Card>
    </View>
  );
}

export default PerformanceIndicator;
