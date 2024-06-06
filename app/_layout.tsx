import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

export default function RootLayout() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name='(tabs)' />
        </Stack>
      </SafeAreaProvider>
    </ApplicationProvider>
  );
}
