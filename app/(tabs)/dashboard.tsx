import React from 'react';
import {
  View,
  StyleSheet,
  useColorScheme,
  ScrollView,
  Text,
  Linking,
} from 'react-native';
import { Button } from '@ui-kitten/components';
import DashboardHeading from '@/components/Dashboard/DashboardHeading/DashboardHeading';
import PerformanceIndicator from '@/components/Dashboard/PerformanceIndicator/PerformanceIndicator';
import ShadowCard from '@/components/UI/ShadowCard/ShadowCard';
import { Colors } from '@/constants/Colors';
import NewsCarousel from '@/components/Dashboard/NewsCarousel/NewsCarousel';
import { FadeInView } from '@/utils/animations';
import data from '../../data.json';
import { useAuth } from '@/context/authContext';
import { parseMessage } from '@/utils/utils';

export default function Dashboard() {
  const {
    dashboardHeading,
    performanceScoreProps,
    newsNotificationsProps,
    feedbackProps,
  } = data.dashboardProps;

  const { newsHeading, newsBackgroundColor, news } = newsNotificationsProps;
  const {
    feedbackHeading,
    noFeedBackAvailableMessage,
    feedbackWatchVideoText,
    weeklyTitle,
  } = feedbackProps;
  const { userData } = useAuth();
  const colorScheme = useColorScheme(); // Get the current color scheme

  // Define the background color based on the color scheme
  const backgroundColor =
    colorScheme === 'dark' ? Colors.dark.background : Colors.light.background;

  const selectedColor = colorScheme
    ? Colors[colorScheme].tint
    : Colors.light.tint;

  // const { text, link } = parseMessage(userData?.dashboard.text_message || '');

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
          <ShadowCard style={styles.feedbackContainer}>
            <Text style={styles.feedbackHeading}>{feedbackHeading}</Text>
            <View style={styles.feedbackProperty}>
              {userData?.dashboard && (
                <>
                  <View style={styles.feedbackHeadingContainer}>
                    <Text style={{ color: 'gray' }}>{weeklyTitle}</Text>
                    <Text style={styles.feedbackPropertyHeading}>
                      {userData?.dashboard.report.week_total_score}
                    </Text>
                  </View>
                  <View style={styles.feedbackMessageContainer}>
                    <Text style={styles.feedbackPropertyValue}>
                      {userData.dashboard.text_message}
                    </Text>
                    {/* {link && (
                      <Button
                        size='large'
                        appearance='outline'
                        status='info'
                        style={{ marginVertical: 10 }}
                        onPress={() => {
                          Linking.openURL(link).catch((err) => {
                            console.log(`Failed to open URL: ${err}`);
                          });
                        }}
                      >
                        <Text>
                          {feedbackWatchVideoText || 'No video available'}
                        </Text>
                      </Button>
                    )} */}
                  </View>
                </>
              )}
              {!userData?.dashboard && (
                <Text style={styles.noFeedbackAvailable}>
                  {noFeedBackAvailableMessage}
                </Text>
              )}
            </View>
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
  feedbackContainer: {
    marginVertical: 15,
    paddingVertical: 15,
  },
  feedbackHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 'auto',
    marginBottom: 25,
  },
  feedbackProperty: {
    display: 'flex',
    flexDirection: 'column',
  },
  feedbackHeadingContainer: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  feedbackPropertyHeading: {
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: -1,
  },
  feedbackPropertyValue: {
    fontSize: 18,
    color: 'gray',
    fontStyle: 'italic',
    marginVertical: 20,
  },
  feedbackMessageContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  noFeedbackAvailable: {
    fontSize: 30,
    textAlign: 'center',
  },
});
