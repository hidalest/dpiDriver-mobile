import React, { useState, useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View, StyleSheet, Linking } from 'react-native';
import { Badge } from 'react-native-elements';
import { useAuth } from '@/context/authContext';
import Toast from 'react-native-toast-message';
import { parseMessage } from '@/utils/utils';
import { usePushNotifications } from '@/hooks/usePushNotifications';

export default function TabLayout() {
  const { notifications } = usePushNotifications();
  const [notificationCount, setNotificationCount] = useState(
    notifications.length
  );
  const { userData } = useAuth();

  useEffect(() => {
    setNotificationCount(notifications.length);
  }, [notifications]);

  useEffect(() => {
    if (userData?.dashboard) {
      const { userName, link, text } = parseMessage(
        userData?.dashboard.text_message
      );

      Toast.show({
        text1: `Dear ${userName}`,
        text2: `${text}\n${link}`,
        type: 'info',
        autoHide: false,
        onPress: () => {
          Toast.hide();
          Linking.openURL(link).catch((err) => {
            console.log(`Failed to open URL: ${err}`);
          });
        },
      });
    }
  }, [userData]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4F81BD',
      }}
    >
      <Tabs.Screen
        name='dashboard'
        options={{
          title: 'Dashboard',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='home' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='notifications'
        options={{
          headerShown: false,
          title: 'Notifications',
          tabBarIcon: ({ color }) => (
            <View>
              <FontAwesome size={28} name='bell' color={color} />
              {notificationCount > 0 && (
                <Badge
                  value={notificationCount}
                  status='error'
                  containerStyle={styles.badgeContainer}
                  badgeStyle={styles.badge}
                  textStyle={styles.badgeText}
                />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='training'
        options={{
          title: 'Training',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='graduation-cap' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          headerShown: false,
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='cog' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    position: 'absolute',
    top: -4,
    right: -8,
  },
  badge: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 12,
  },
});
