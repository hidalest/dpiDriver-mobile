import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DashboardHeadingProps } from './Interface';

function DashboardHeading(props: DashboardHeadingProps) {
  const { userPicPlaceholder, mainLogo, greetingHeader } = props;
  return (
    <View style={styles.container}>
      {/* //TODO: delete the name Esteban and replace it with the actual user */}
      <Text>{greetingHeader}, Esteban</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});

export default DashboardHeading;
