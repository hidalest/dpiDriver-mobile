import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DashboardHeadingProps } from './Interface';
import { styles } from './styles';
import { Avatar } from '@ui-kitten/components';

function DashboardHeading(props: DashboardHeadingProps) {
  const { userPicPlaceholder, mainLogo, greetingHeader } = props;
  return (
    <View style={styles.container}>
      {/* //TODO: delete the name Esteban and replace it with the actual user */}
      <Text>{greetingHeader}Esteban</Text>

      <Avatar
        source={require('../../../assets/images/userLogoPlaceholder.png')}
        size='small'
      />
    </View>
  );
}

export default DashboardHeading;
