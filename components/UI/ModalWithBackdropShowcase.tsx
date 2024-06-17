import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';

interface ModalProps {
  title: string;
  buttonText: string;
  description: string;
}
export const ModalWithBackdropShowcase = (props: ModalProps) => {
  const { title, buttonText, description } = props;
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button onPress={() => setVisible(true)} appearance='ghost'>
        {title}
      </Button>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true}>
          <Text style={styles.description}>{description}</Text>
          <Button onPress={() => setVisible(false)}>{buttonText}</Button>
        </Card>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  description: {
    marginVertical: 20,
  },
});
