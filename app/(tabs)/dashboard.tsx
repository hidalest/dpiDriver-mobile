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

export default function Dashboard() {
  const {
    dashboardHeading,
    performanceScoreProps,
    newsNotificationsProps,
    feedbackProps,
  } = data.dashboardProps;

  const { newsHeading, newsBackgroundColor, news } = newsNotificationsProps;
  const { feedbackHeading, quadrantTitle } = feedbackProps;
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
          {/* Performance Indicator */}
          <ShadowCard>
            <PerformanceIndicator
              {...performanceScoreProps}
              progressScore={100}
              style={styles.performance}
            />
          </ShadowCard>
          {/* Feedback */}
          {/* <ShadowCard style={styles.newsContainer}>
            <Text style={styles.newsHeading}>{feedbackHeading}</Text>
            <View style={styles.feedbackProperty}>
              <Text style={styles.feedbackPropertyHeading}>
                {quadrantTitle}
              </Text>
              <Text style={styles.feedbackPropertyValue}>Team Player</Text>
            </View>
          </ShadowCard> */}
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
  feedbackProperty: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  feedbackPropertyHeading: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  feedbackPropertyValue: {
    fontSize: 16,
  },
});
