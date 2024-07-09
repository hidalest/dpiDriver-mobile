import { useRef, useState } from 'react'
import { View } from 'react-native'
import { Text } from '@ui-kitten/components';
import { Video, ResizeMode } from 'expo-av';
import { TranslateFromBotToTop } from '@/utils/animations';
import { styles } from './Styles';
import { TrainingItemProps } from './Interface';

const TrainingItem = ({ training, descHeader, lengthText }: TrainingItemProps) => {
  const video = useRef(null)
  const [status, setStatus] = useState({})

    return (
      <View style={styles.container}>
        <Text style={styles.header} category='h4'>{training.name}</Text>
          <View style={[styles.videoContainer, styles.horizontalPadding]}>
            <Video 
              style={styles.video} 
              ref={video}
              source={{
                uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
              }}
              useNativeControls
              resizeMode={ResizeMode.STRETCH}
              onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
          </View>
        <TranslateFromBotToTop style={{}} delay={2000}>
          <View style={[styles.descContainer, styles.horizontalPadding]}>
              <Text style={styles.descHeader}>{descHeader}</Text>
              <Text style={styles.description}>{training.description}</Text>
              <Text style={styles.duration}>{lengthText} {training.duration}</Text>
          </View>
        </TranslateFromBotToTop>
      </View>
    );
}

export default TrainingItem


