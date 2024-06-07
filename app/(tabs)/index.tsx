import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import data from '../../data.json';
import DashboardHeading from '@/components/Dashboard/DashboardHeading/DashboardHeading';
import { Card } from '@ui-kitten/components';
import PerformanceIndicator from '@/components/Dashboard/PerformanceIndicator/PerformanceIndicator';

export default function Index() {
  const { dashboardHeading, performanceScoreProps } = data.dashboardProps;
  const colorScheme = useColorScheme(); // Get the current color scheme

  // Define the background color based on the color scheme
  const backgroundColor = colorScheme === 'dark' ? 'black' : 'white';
  return (
    <View style={(styles.container, { backgroundColor })}>
      <DashboardHeading {...dashboardHeading} />
      <PerformanceIndicator {...performanceScoreProps} />
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
