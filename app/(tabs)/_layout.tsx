import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
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
            <FontAwesome size={28} name='bell' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='random'
        options={{
          title: 'Random',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='user' color={color} />
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
