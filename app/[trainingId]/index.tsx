<<<<<<< HEAD
import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import TrainingItem from '@/components/TrainingItem/TrainingItem';
import data from '../../data.json';

const TrainingScreen = () => {
    const { trainingItemPageProps: {descHeader, lengthText} } = data

    const { training } = useLocalSearchParams();
    const trainingData = training && typeof training === 'string' ? JSON.parse(training) : {};

    return (
      <View style={styles.container}>
        <TrainingItem training={trainingData} descHeader={descHeader} lengthText={lengthText}/>
=======
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import TrainingItem from '@/components/TrainingItem/TrainingItem';

const TrainingScreen = () => {
    const { training } = useLocalSearchParams();
    const trainingData = training && typeof training === 'string' ? JSON.parse(training) : {};
  
    return (
      <View style={styles.container}>
        <TrainingItem training={trainingData}/>
>>>>>>> 3da3716fe960ddb62c068f23e017236f081b58a0
      </View>
    );
}

export default TrainingScreen

const styles = StyleSheet.create({
  container: {      
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent'
  },
  horizontalPadding: {
      paddingHorizontal: 20
  },
});