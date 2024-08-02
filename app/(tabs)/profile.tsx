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

  if (!userData) {
    return <p>Loading...</p>;
  }
  const driver = userData.dataUser;
  const driverDataJoined = new Date(driver.date_joined).toLocaleDateString();
  return (
    <View>
      <View style={styles.userInfo}>
        <Text style={styles.heading}>Profile</Text>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoHeader}>Name: </Text>
          <Text style={styles.userInfoData}>
            {driver?.first_name} {driver?.last_name}
          </Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoHeader}>Email: </Text>
          <Text style={styles.userInfoData}>{driver?.email}</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoHeader}>Mobile Number: </Text>
          <Text style={styles.userInfoData}>{driver?.mobile_number}</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoHeader}>Your Transporter ID: </Text>
          <Text style={styles.userInfoData}>{driver?.transporter_id}</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoHeader}>Date Joined: </Text>
          <Text style={styles.userInfoData}>{driverDataJoined}</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoHeader}>Driver License Expiry: </Text>
          <Text style={styles.userInfoData}>
            {driver.driver_license_expiry}
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
  heading: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
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
