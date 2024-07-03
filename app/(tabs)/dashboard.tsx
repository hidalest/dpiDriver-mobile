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
import ShadowCard from '@/components/UI/ShadowCard/ShadowCard';
import { Colors } from '@/constants/Colors';
import NewsCarousel from '@/components/Dashboard/NewsCarousel/NewsCarousel';
import { FadeInView } from '@/utils/animations';

import data from '../../data.json';
import { useAuth } from '@/context/authContext';

export default function Dashboard() {
  const { dashboardHeading, performanceScoreProps, newsNotificationsProps } =
    data.dashboardProps;
  const { userData } = useAuth();

  const { newsHeading, newsBackgroundColor, news } = newsNotificationsProps;
  const colorScheme = useColorScheme(); // Get the current color scheme

  // Define the background color based on the color scheme
  const backgroundColor =
    colorScheme === 'dark' ? Colors.dark.background : Colors.light.background;

  const selectedColor = colorScheme
    ? Colors[colorScheme].tint
    : Colors.light.tint;

  console.log(colorScheme);

  if (!userData) {
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const { first_name } = userData.driver;
  return (
    <FadeInView style={(styles.container, { backgroundColor: 'transparent' })}>
      <View style={(styles.container, { backgroundColor: 'transparent' })}>
        <ScrollView>
          <DashboardHeading {...dashboardHeading} name={first_name} />
          <ShadowCard>
            <PerformanceIndicator
              {...performanceScoreProps}
              progressScore={100}
              style={styles.performance}
              dcr={userData.dcr}
              rescue={userData.rescue}
              dsb={userData.dsb}
              mc={userData.morning_checklist}
              dar={userData.dar}
              pod={userData.pod}
              cc={userData.cc}
              sc={userData.sc}
              oa={userData.ontime_attendance}
            />
          </ShadowCard>
          <ShadowCard style={styles.newsContainer}>
            <Text style={styles.newsHeading}>{newsHeading}</Text>
            <NewsCarousel
              backgroundColor={newsBackgroundColor}
              titleColor='black'
              descriptionColor='black'
              newsData={news}
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
    fontSize: 20,
    fontWeight: 'bold',
  },
});
