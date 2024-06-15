import React, { useState, useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Badge } from 'react-native-elements';

export default function TabLayout() {
  // Replace this with your actual notification count logic
  const [notificationCount, setNotificationCount] = useState(12);

  // Fetch or update notification count logic here
  useEffect(() => {
    // Simulate fetching notification count
    const fetchNotificationCount = () => {
      // Example: setNotificationCount(5);
    };

    fetchNotificationCount();
  }, []);

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
