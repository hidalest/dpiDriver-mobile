import { CommonActions } from '@react-navigation/native';
import { Button } from '@ui-kitten/components';
import { useNavigation } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
      <Button style={styles.logoutBtn} onPress={handleLogout}>
        Log Out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  logoutBtn: {
    width: '50%',
    margin: 'auto',
    marginTop: 40,
  },
});

export default Settings;
