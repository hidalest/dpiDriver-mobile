import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { FadeInView } from '@/utils/animations';

import NotificationsList from '@/components/Notifications/NotificationsList';
import { Button, Icon, IconElement } from '@ui-kitten/components';

import data from '../../data.json';
import FontAwesome from '@expo/vector-icons/FontAwesome';
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
        <View style={styles.buttonContainer}>
          <Button style={styles.button}>
            <>
              <FontAwesome
                size={60}
                name='trash'
                color={'white'}
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Delete all</Text>
            </>
          </Button>
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
    minHeight: '80%',
    width: '100%',
    padding: 20,
    paddingBottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonIcon: {
    fontSize: 20,
    marginRight: 5,
  },
  buttonText: {
    fontSize: 15,
    marginRight: 5,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Notifications;
