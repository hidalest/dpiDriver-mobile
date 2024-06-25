import { CommonActions } from '@react-navigation/native';
import { Link, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from '@/components/Login/Login';
import data from '../data.json';
import { SERVER_URL } from '@/config/apiConfig';
import axios from 'axios';

const LoginScreen = () => {
  const {} = data.loginProps;
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const handleSignIn = async (
    email: string,
    password: string
  ): Promise<void> => {
    try {
      setIsLoading(true);

      // FETCH TO GET THE AUTH TOKEN
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

      // FETCH OF THE CURRENT USER
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

      // After successful login, reset the navigation stack and navigate to the dashboard
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: '(tabs)' }],
        })
      );
    } catch (error) {
      console.error('Network request failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Add login form components here */}
      <Login
        onSignIn={handleSignIn}
        {...data.loginProps}
        isLoading={isLoading}
      />
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
