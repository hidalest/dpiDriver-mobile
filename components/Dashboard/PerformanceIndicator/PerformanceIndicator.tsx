import Calendar from '@/components/UI/Calendar/Calendar';
import { Card, CircularProgressBar } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PerformanceScoreProps } from './Interface';
import RadialProgress from '@/components/UI/RadialProgress/RadialProgress';

function PerformanceIndicator(props: PerformanceScoreProps) {
  const { mainTitle } = props;
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.heading}>{mainTitle}</Text>
        <Calendar />
        <RadialProgress percentage={30} style={styles.radial} />
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
    // flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  radial: {
    margin: 'auto',
  },
});

export default PerformanceIndicator;
