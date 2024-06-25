import { CommonActions } from '@react-navigation/native';
import { Link, useNavigation } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from '@/components/Login/Login';
import data from '../data.json';
import { SERVER_URL } from '@/config/apiConfig';
import axios from 'axios';

const LoginScreen = () => {
  const {} = data.loginProps;

  const navigation = useNavigation();

  const handleSignIn = async (
    email: string,
    password: string
  ): Promise<void> => {
    try {
      const responseToken = await fetch(SERVER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!responseToken.ok) {
        throw new Error(`HTTP error! status: ${responseToken.status}`);
      }
      const authToken = await responseToken.json();

      const responseUser = await fetch(SERVER_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authToken.access}`,
        },
      });
      if (!responseUser.ok) {
        throw new Error(`HTTP error! status: ${responseUser.status}`);
      }
      const dataUser = await responseUser.json();
      console.log(dataUser);

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: '(tabs)' }],
        })
      );
    } catch (error) {
      console.error('Network request failed:', error);
    }

    // After successful login, reset the navigation stack and navigate to the dashboard
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
