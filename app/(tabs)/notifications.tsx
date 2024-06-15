import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { FadeInView } from '@/utils/animations';

import data from '../../data.json';

function Notifications() {
  const { mainTitle, notificationsAreaColor } = data.notificationProps;
  return (
    <SafeAreaView style={styles.safeArea}>
      <FadeInView style={styles.container}>
        <Text style={styles.mainTitle}>{mainTitle}</Text>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View
            style={[
              styles.bottomContainer,
              { backgroundColor: notificationsAreaColor },
            ]}
          ></View>
        </ScrollView>
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
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});

export default Notifications;
