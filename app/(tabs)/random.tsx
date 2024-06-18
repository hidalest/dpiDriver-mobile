import Trainings from '@/components/Trainings/Trainings';
import React from 'react';
import { View } from 'react-native';
import { trainingsPageProps } from '../../data.json'


function Random() {
  const { 
      headerText, 
      searchTermPlaceholder, 
      noTrainingsText, 
      emoji,
      trainingDummyData } = trainingsPageProps

  return (
    <View>
      <Trainings 
        headerText={headerText} 
        trainings={trainingDummyData} 
        noTrainingsText={noTrainingsText} 
        emoji={emoji} 
        searchTermPlaceholder={searchTermPlaceholder} />
    </View>
  );
}

export default Random;
