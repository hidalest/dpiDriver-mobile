import Calendar from '@/components/UI/Calendar/Calendar';
import { Card, CircularProgressBar } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PerformanceScoreProps } from './Interface';
import RadialProgress from '@/components/UI/RadialProgress/RadialProgress';

function PerformanceIndicator(props: PerformanceScoreProps) {
  const { mainTitle, style } = props;
  return (
    <View style={[styles.container, style]}>
      <Card style={styles.cardContainer}>
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
    margin: 20,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow radius
    elevation: 5, // Elevation (for Android)
    backgroundColor: 'white', // Ensure background color is set
    padding: 20, // Add padding to the card
    borderRadius: 10, // Add border radius if needed
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  radial: {
    margin: 'auto',
    marginBottom: 30,
  },
  cardContainer: {
    borderColor: 'transparent',
  },
});

export default PerformanceIndicator;
