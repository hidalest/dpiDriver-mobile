import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';
import { AuthProvider } from '@/context/authContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen
              name='(tabs)'
              options={{
                headerTitle: 'My Courier',
                headerBackButtonMenuEnabled: false,
                headerBackVisible: false,
              }}
            />
            <Stack.Screen
              name="[trainingId]/index"
              options={{
                headerTitle: 'Training Details',
                headerBackVisible: true,
              }}
            />
          </Stack>
          <StatusBar style='auto' />
        </SafeAreaProvider>
      </ApplicationProvider>
    </AuthProvider>
  );
}
