import { useRef, useState } from 'react'
import { View } from 'react-native'
import { Button, Card, Modal, Text } from '@ui-kitten/components';
import { Video, ResizeMode } from 'expo-av';
import { TranslateFromBotToTop } from '@/utils/animations';
import { styles } from './Styles';
import { TrainingItemProps } from './Interface';
import { formatState } from '@/utils/utils';

const TrainingItem = (props: TrainingItemProps) => {
  const { training, 
          descHeader, 
          lengthText, 
          acknowledgedText, 
          acknowledgeTrainingText, 
          modalQuestionText, 
          modalConfirmText, 
          modalDenyText } = props

  const video = useRef(null)
  const [status, setStatus] = useState({})
  const [visible, setVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAcknowledgeTraining = () => {
    // TODO: Check if API endpoint exist to mark training as "completed"
    setIsSubmitting(true)
    
    try {
      training.state = 'completed'
    } catch (error) {
      // TODO: Implement toastify to display error message 
      console.log(error)
    } finally {
      setIsSubmitting(false)
      setVisible(false)
    }
  }

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
        <TranslateFromBotToTop style={{ flex: 1 }} delay={2000}>
          <View style={[styles.descContainer, styles.horizontalPadding]}>
            <View style={{ gap: 10 }}>
              <Text style={styles.descHeader}>{descHeader}</Text>
              <Text style={styles.description}>{training.description}</Text>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.duration}>{lengthText} {training.duration}</Text>
                <Text style={styles.duration}>{formatState(training.state)}</Text>
              </View>
            </View>
            {training.state === 'completed' ? (
              <Button style={{ width: '100%' }} size='large' disabled={true} >
                {acknowledgedText}   
              </Button>
            ) : (
                <>
                  <Button style={styles.ackButton} size='large' onPress={() => setVisible(true)}>
                    {acknowledgeTrainingText}
                  </Button>
                  <Modal
                    visible={visible}
                    style={styles.modal}
                    backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    onBackdropPress={() => setVisible(false)}
                    animationType='fade'
                  >
                    <Card disabled={true}>
                      <Text style={styles.modalText}>
                        {modalQuestionText}
                      </Text>
                      <Button 
                        onPress={handleAcknowledgeTraining}
                        appearance='outline'
                        status='primary'
                        style={{ marginBottom: 20 }}
                      >
                        {modalConfirmText}
                      </Button>
                      <Button 
                        onPress={() => setVisible(false)}
                        appearance='outline'
                        status='basic'
                      >
                        {modalDenyText}
                      </Button>
                    </Card>
                  </Modal>
                </>
            )}
          </View>
        </TranslateFromBotToTop>       
      </View>
    );
}

export default TrainingItem


