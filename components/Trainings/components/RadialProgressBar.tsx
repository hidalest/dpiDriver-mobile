import { StyleSheet, View } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import RadialProgress from '../../UI/RadialProgress/RadialProgress';

interface RadialProgressCardProps {
    toggleInput: boolean;
} 

const RadialProgressCard = (props: RadialProgressCardProps) => (
  // Hide RadialProgressCard component when user is searching...
  !props.toggleInput && (
  <View style={styles.horizontalPadding}>
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        <Text category='p1' style={styles.text}>You have completed 75% of your trainings</Text>
        <RadialProgress percentage={75} />
      </View>
    </Card>
  </View>)
);

const styles = StyleSheet.create({
    horizontalPadding: {
        paddingHorizontal: 20
    },
    card: {
        display: 'flex',
        gap: 8,
        overflow: 'hidden',
        marginBottom: 24
    },
        cardContent: {
        flexDirection: 'row',  
        alignItems: 'center', 
        justifyContent: 'space-between',
    },
    text: {
        flex: 1,  
        marginRight: 8,
    },
        button: {
        marginTop: 10,
        width: '100%'
    },
});

export default RadialProgressCard;
