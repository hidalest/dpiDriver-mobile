import { CommonActions } from '@react-navigation/native';
import { Button } from '@ui-kitten/components';
import { useNavigation } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

function Settings() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'index' }],
      })
    );
  };
  return (
    <View>
      <Text>Settings</Text>
      <Button onPress={handleLogout}>Log Out</Button>
    </View>
  );
}

export default Settings;
