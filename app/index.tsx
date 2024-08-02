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
import { startingWeekNumber } from '@/constants/Dates';

const LoginScreen = () => {
  const {} = data.loginProps;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { token_not_valid } = API_CODE;
  const { setUserData } = useAuth();
  const { expoPushToken, notifications } = usePushNotifications();
  const navigation = useNavigation();

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
        // TODO change the line below when we have actual data, this should be replaced with userTransportId
        'A1AXYAQM887EIE', // userTransportId
        startingWeekNumber
      );
      const [foundUserData] = dashboardData.results;
      setUserData({
        dashboard: foundUserData,
        authToken: authToken.access,
        dataUser,
      });

      if (dataUser.code === token_not_valid) {
        console.log('Error here');
        throw new Error('Invalid username and password');
      }

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: '(tabs)' }],
        })
      );
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.error('Network request failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Login
        onSignIn={handleSignIn}
        {...data.loginProps}
        isLoading={isLoading}
        isError={isError}
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
