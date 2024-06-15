import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { FadeInView } from '@/utils/animations';

import data from '../../data.json';
import NotificationsList from '@/components/Notifications/NotificationsList';

function Notifications() {
  const { mainTitle, notificationsAreaColor } = data.notificationProps;
  return (
    <SafeAreaView style={styles.safeArea}>
      <FadeInView style={styles.container}>
        <Text style={styles.mainTitle}>{mainTitle}</Text>
        <View
          style={[
            styles.bottomContainer,
            { backgroundColor: notificationsAreaColor },
          ]}
        >
          <NotificationsList />
        </View>
      </FadeInView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    backgroundColor: '#4F81BD',
    minHeight: '100%',
    width: '100%',
    padding: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});

export default Notifications;
