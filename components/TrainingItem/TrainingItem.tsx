import { StyleSheet, View } from 'react-native'
import { Text } from '@ui-kitten/components';
import React from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Training } from '../Trainings/Interface';

interface TrainingItemProps {
    training: Training;
}

const TrainingItem = ({ training }: TrainingItemProps) => {
  
    return (
      <View style={styles.container}>
        <Text style={styles.header} category='h4'>{training.name}</Text>
        <View style={[styles.videoContainer, styles.horizontalPadding]}>
            <View style={styles.video}></View>
        </View>
        <Text style={[styles.description, styles.horizontalPadding]}>Description: {training.description}</Text>
      </View>
    );
}

export default TrainingItem

const styles = StyleSheet.create({
    container: {      
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        backgroundColor: 'trasparent'
    },
    horizontalPadding: {
        paddingHorizontal: 20
    },
    header: {
        marginVertical: 26,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    videoContainer: {
        backgroundColor: 'red',
        height: 380
    },
    video: {
        backgroundColor: 'green',
        height: '100%',
    },
    name: {
      fontSize: 18,
    },
    description: {
      fontSize: 16,
      marginVertical: 20
    },
    state: {
      fontSize: 14,
      color: 'blue',
    },
    duration: {
      fontSize: 14,
      color: 'green',
    },
  });