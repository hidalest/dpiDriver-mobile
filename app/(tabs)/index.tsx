import React from 'react';
import { View, StyleSheet, useColorScheme, ScrollView } from 'react-native';
import DashboardHeading from '@/components/Dashboard/DashboardHeading/DashboardHeading';
import PerformanceIndicator from '@/components/Dashboard/PerformanceIndicator/PerformanceIndicator';

import data from '../../data.json';

export default function Index() {
  const { dashboardHeading, performanceScoreProps } = data.dashboardProps;
  const colorScheme = useColorScheme(); // Get the current color scheme

  // Define the background color based on the color scheme
  const backgroundColor = colorScheme === 'dark' ? 'black' : 'white';
  return (
    <View style={(styles.container, { backgroundColor })}>
      <ScrollView>
        <DashboardHeading {...dashboardHeading} />
        <PerformanceIndicator {...performanceScoreProps} progressScore={75} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
