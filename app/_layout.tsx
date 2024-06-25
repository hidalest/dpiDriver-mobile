import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';

export default function RootLayout() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen
              name='index'
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='(tabs)'
              options={{
                headerTitle: 'My Courier',
                headerBackButtonMenuEnabled: false,
                headerBackVisible: false,
              }}
            />
            <Stack.Screen
              name="[trainingId]"
              options={{
                headerTitle: 'Training Details',
                headerBackVisible: true,
              }}
            />
        </Stack>
        <StatusBar style='auto' />
      </SafeAreaProvider>
    </ApplicationProvider>
  );
}
