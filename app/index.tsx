import { CommonActions } from '@react-navigation/native';
import { Button } from '@ui-kitten/components';
import { Link, useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Perform login logic here

    // After successful login, reset the navigation stack and navigate to the dashboard
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: '(tabs)' }],
      })
    );
  };
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      {/* Add login form components here */}
      <Button onPress={handleLogin}>Sign In</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default LoginScreen;
