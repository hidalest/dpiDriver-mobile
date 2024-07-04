import { useAuth } from '@/context/authContext';
import { CommonActions } from '@react-navigation/native';
import { Button } from '@ui-kitten/components';
import { useNavigation } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Settings() {
  const navigation = useNavigation();
  const { userData } = useAuth();

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
      <View style={styles.userInfo}>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoHeader}>Name: </Text>
          <Text style={styles.userInfoData}>
            {userData?.first_name} {userData?.last_name}
          </Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoHeader}>Mobile Number: </Text>
          <Text style={styles.userInfoData}>{userData?.mobile_number}</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoHeader}>Email: </Text>
          <Text style={styles.userInfoData}>{userData?.email}</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoHeader}>Date Joined: </Text>
          <Text style={styles.userInfoData}>{userData?.date_joined}</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoHeader}>Driver License Expiry: </Text>
          <Text style={styles.userInfoData}>
            {userData?.driver_license_expiry}
          </Text>
        </View>
      </View>
      <Button style={styles.logoutBtn} onPress={handleLogout}>
        Log Out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfo: {
    padding: 40,
    backgroundColor: 'white',
  },
  userInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  userInfoHeader: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  userInfoData: {
    fontWeight: 'normal',
    fontSize: 14,
    marginLeft: 10,
  },
  logoutBtn: {
    width: '50%',
    margin: 'auto',
    marginTop: 40,
  },
});

export default Settings;
