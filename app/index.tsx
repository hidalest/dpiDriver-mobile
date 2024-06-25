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
    // Perform login logic here
    console.log(email);
    console.log(password);

    // axios
    //   .post(SERVER_URL, { email, password })
    //   .then(function (response) {
    //     console.log(response);
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });

    try {
      const response = await fetch(SERVER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const token = await response.json();
      console.log(token);

      // navigation.dispatch(
      //   CommonActions.reset({
      //     index: 0,
      //     routes: [{ name: '(tabs)' }],
      //   })
      // );
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
