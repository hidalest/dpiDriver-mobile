import { CommonActions } from '@react-navigation/native';
import { Link, useNavigation } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from '@/components/Login/Login';
import data from '../data.json';

const LoginScreen = () => {
  const {} = data.loginProps

  const navigation = useNavigation();

  const handleSignIn = (username: string, password: string): void => {
    // Perform login logic here
    console.log(username)
    console.log(password)

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
        {/* Add login form components here */}
        <Login onSignIn={handleSignIn} {...data.loginProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
