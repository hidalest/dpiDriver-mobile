import React from 'react';
import { View, StyleSheet, useColorScheme, ScrollView } from 'react-native';
import DashboardHeading from '@/components/Dashboard/DashboardHeading/DashboardHeading';
import PerformanceIndicator from '@/components/Dashboard/PerformanceIndicator/PerformanceIndicator';

import data from '../../data.json';
import NewsNotification from '@/components/Dashboard/NewsNotification/NewsNotification';
import ShadowCard from '@/components/UI/ShadowCard/ShadowCard';
import { Colors } from '@/constants/Colors';

export default function Dashboard() {
  const { dashboardHeading, performanceScoreProps } = data.dashboardProps;
  const colorScheme = useColorScheme(); // Get the current color scheme

  // Define the background color based on the color scheme
  const backgroundColor =
    colorScheme === 'dark' ? Colors.dark.background : Colors.light.background;
  return (
    <View style={(styles.container, { backgroundColor })}>
      <ScrollView>
        <DashboardHeading {...dashboardHeading} />
        <ShadowCard>
          <PerformanceIndicator
            {...performanceScoreProps}
            progressScore={75}
            style={styles.performance}
          />
        </ShadowCard>
        <ShadowCard>
          <NewsNotification />
        </ShadowCard>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark.tint,
  },

  performance: {
    backgroundColor: 'white',
  },
});
