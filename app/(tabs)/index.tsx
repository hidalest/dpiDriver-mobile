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
import DashboardHeading from '@/components/Dashboard/DashboardHeading/DashboardHeading';
import { Card } from '@ui-kitten/components';

export default function Index() {
  const { loginProps, dashboardProps } = data;
  const colorScheme = useColorScheme(); // Get the current color scheme

  // Define the background color based on the color scheme
  const backgroundColor = colorScheme === 'dark' ? 'black' : 'white';
  return (
    <View style={(styles.container, { backgroundColor })}>
      <DashboardHeading {...dashboardProps.dashboardHeading} />
      <Card>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          explicabo placeat aspernatur tenetur id rerum similique ratione
          reiciendis adipisci omnis eaque nulla aut autem beatae at accusamus
          aliquam, assumenda laborum.
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
