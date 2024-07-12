// src/screens/LoginScreen.tsx

import { CommonActions } from '@react-navigation/native';
import { Link, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from '@/components/Login/Login';
import data from '../data.json';
import { useAuth } from '@/context/authContext';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import { getWeekNumber } from '@/utils/getWeekNumber';
import {
  getAuthToken,
  getCurrentUser,
  getDashboardData,
} from '@/utils/apiService';
import { API_CODE } from '@/config/apiConfig';

const LoginScreen = () => {
  const {} = data.loginProps;
  const [isLoading, setIsLoading] = useState(false);
  const { token_not_valid } = API_CODE;
  const { setUserData } = useAuth();
  const { expoPushToken, notification } = usePushNotifications();
  const navigation = useNavigation();

  const dataNotification = JSON.stringify(notification, undefined, 2);

  const handleSignIn = async (
    email: string,
    password: string
  ): Promise<void> => {
    const todayDate = new Date();
    const todayWeekNumber = getWeekNumber(todayDate);
    const currentYear = todayDate.getFullYear();
    try {
      setIsLoading(true);

      const authToken = await getAuthToken(email, password);
      const dataUser = await getCurrentUser(authToken.access);

      const userTransportId = dataUser.transport_id;
      const dashboardData = await getDashboardData(
        authToken.access,
        currentYear,
        // TODO: replace this with userTransportId and todayWeekNumber when we have actual data,
        'A1AXYAQM887EIE', // userTransportId
        21
      );
      const [foundUserData] = dashboardData.results;
      setUserData(foundUserData);

      if (dataUser.code === token_not_valid) {
        throw new Error('Invalid username and password');
      }

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
