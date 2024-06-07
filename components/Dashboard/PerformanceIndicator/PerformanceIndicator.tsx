import Calendar from '@/components/UI/Calendar/Calendar';
import { Card } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function PerformanceIndicator() {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.heading}>Performance Indicator</Text>
        <Calendar />
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
});

export default PerformanceIndicator;
