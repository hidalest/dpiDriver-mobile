import React from 'react';
import {
  View,
  StyleSheet,
  useColorScheme,
  ScrollView,
  Text,
} from 'react-native';
import DashboardHeading from '@/components/Dashboard/DashboardHeading/DashboardHeading';
import PerformanceIndicator from '@/components/Dashboard/PerformanceIndicator/PerformanceIndicator';

import data from '../../data.json';
import NewsNotification from '@/components/Dashboard/NewsNotification/NewsNotification';
import ShadowCard from '@/components/UI/ShadowCard/ShadowCard';
import { Colors } from '@/constants/Colors';
import NewsCarousel from '@/components/Dashboard/NewsCarousel/NewsCarousel';
import { FadeInView } from '@/utils/animations';

export default function Dashboard() {
  const { dashboardHeading, performanceScoreProps, newsNotificationsProps } =
    data.dashboardProps;
  const colorScheme = useColorScheme(); // Get the current color scheme

  // Define the background color based on the color scheme
  const backgroundColor =
    colorScheme === 'dark' ? Colors.dark.background : Colors.light.background;

  const selectedColor = colorScheme
    ? Colors[colorScheme].tint
    : Colors.light.tint;

  console.log(colorScheme);
  return (
    <FadeInView style={(styles.container, { backgroundColor: 'transparent' })}>
      <View style={(styles.container, { backgroundColor: 'transparent' })}>
        <ScrollView>
          <DashboardHeading {...dashboardHeading} />
          <ShadowCard>
            <PerformanceIndicator
              {...performanceScoreProps}
              progressScore={75}
              style={styles.performance}
            />
          </ShadowCard>
          <ShadowCard style={styles.newsContainer}>
            <Text style={styles.newsHeading}>News</Text>
            <NewsCarousel
              backgroundColor='#c0dee5'
              titleColor='black'
              descriptionColor='black'
              newsData={newsNotificationsProps}
            />
          </ShadowCard>
        </ScrollView>
      </View>
    </FadeInView>
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
  },

  performance: {
    backgroundColor: 'white',
  },
  newsContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  newsHeading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
