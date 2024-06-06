import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import data from '../../data.json';
import DashboardHeading from '@/components/DashboardHeading/DashboardHeading';

export default function Index() {
  const { loginProps, dashboardProps } = data;
  const colorScheme = useColorScheme(); // Get the current color scheme

  // Define the background color based on the color scheme
  const backgroundColor = colorScheme === 'dark' ? 'black' : 'white';
  return (
    <View style={(styles.container, { backgroundColor })}>
      <DashboardHeading {...dashboardProps.dashboardHeading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
