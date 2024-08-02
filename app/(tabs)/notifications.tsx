import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { FadeInView } from '@/utils/animations';
import { Button } from '@ui-kitten/components';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import data from '../../data.json';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import NotificationList from '@/components/Notifications/NotificationsList';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  icon: string;
}

function Notifications() {
  const { mainTitle, notificationsAreaColor } = data.notificationProps;
  const { notifications: pushNotifications } = usePushNotifications();

  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    if (pushNotifications.length > 0) {
      const lastNotification = pushNotifications[pushNotifications.length - 1];
      const newNotification: Notification = {
        id: lastNotification.request.identifier,
        title: lastNotification.request.content.title || 'No title',
        message: lastNotification.request.content.body || 'No message',
        time: lastNotification.date.toString(),
        icon: 'https://placekitten.com/40/40', // Default icon
      };
      setNotifications((prevNotifications) => [
        newNotification,
        ...prevNotifications,
      ]);
    }
  }, [pushNotifications]);

  const handleDelete = (id: string) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

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
          <NotificationList
            notifications={notifications}
            handleDelete={handleDelete}
          />
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
