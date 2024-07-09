import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import { FadeInView, ScaleInView } from '@/utils/animations';
import { formatState } from '@/utils/utils'; 
import { Training } from '../Interface';
import { useRouter } from 'expo-router';

interface TrainingsListProps {
    trainings: Training[];
    noTrainingsText: string;
    emoji: string;
}

const TrainingsList = ({ trainings, noTrainingsText, emoji }: TrainingsListProps) => {
    const router = useRouter()

    const handlePress = (training: Training) => {
        router.push({
            pathname: `${training.id}`,
            params: { training: JSON.stringify(training) }
        })
    }

    return (
    <View style={styles.container}>
        {trainings.length > 0 ? (
            <ScrollView contentContainerStyle={styles.trainingList}>
                {trainings.map((training) => (
                <Card key={training.id} style={styles.trainingCard} onPress={() => handlePress(training)}>
                    <Text style={styles.trainingHeader}>{training.name}</Text>
                    <Text style={styles.trainingDescription}>{training.description}</Text>
                    <View style={styles.trainingFooter}>
                    <Text style={styles.trainingState}>{formatState(training.state.toUpperCase())}</Text>
                    <Text style={styles.trainingDuration}>{training.duration}</Text>
                    </View>
                </Card>
                ))}
            </ScrollView>
        ) : (
            <View style={styles.noTrainingsFound}>
            <ScaleInView style={{}} delay={350}>
                <Text style={styles.emoji}>{emoji}</Text>
            </ScaleInView>
            <FadeInView style={{}}>
                <Text style={styles.noTrainingsText}>{noTrainingsText}</Text>
            </FadeInView>
            </View>
        )}
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    trainingList: {
        backgroundColor: 'white',
        paddingTop: 5,
        paddingHorizontal: 20,
        flexGrow: 1,
    },
    noTrainingsFound: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        gap: 20
    },
    trainingHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 6,
    },
    trainingDescription: {
        fontSize: 12,
        fontWeight: 'light',
    },
    trainingFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    trainingState: {
        fontSize: 10,
        fontWeight: 'bold',
        backgroundColor: 'bg-primary',
        borderRadius: 100,
        padding: 4,
    },
    trainingDuration: {
        fontSize: 10,
    },
    trainingCard: {
        marginBottom: 24,
    },
    emoji: {
        fontSize: 48,
        color: 'blue'
    },
    noTrainingsText: {
        fontSize: 28
    }
});

export default TrainingsList;
