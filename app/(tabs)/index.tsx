import React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import data from '../../data.json';
import DashboardHeading from '@/components/DashboardHeading/DashboardHeading';

export default function Index() {
  const { loginProps, dashboardProps } = data;
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <DashboardHeading {...dashboardProps.dashboardHeading} />
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
