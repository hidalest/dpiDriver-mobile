import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import TrainingItem from '@/components/TrainingItem/TrainingItem';
import data from '../../data.json';

const TrainingScreen = () => {
    const { trainingItemPageProps: { 
          descHeader, 
          lengthText, 
          acknowledgedText, 
          acknowledgeTrainingText, 
          modalConfirmText, 
          modalDenyText, 
          modalQuestionText
        } 
    } = data


    const { training } = useLocalSearchParams();
    const trainingData = training && typeof training === 'string' ? JSON.parse(training) : {};

    return (
      <View style={styles.container}>
        <TrainingItem 
          training={trainingData} 
          descHeader={descHeader} 
          lengthText={lengthText}
          acknowledgeTrainingText={acknowledgeTrainingText}
          acknowledgedText={acknowledgedText}
          modalConfirmText={modalConfirmText}
          modalDenyText={modalDenyText}
          modalQuestionText={modalQuestionText}  
        />
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