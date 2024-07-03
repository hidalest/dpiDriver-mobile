import React, { Fragment, useState } from 'react';
import { Layout, Text, Input, Button, Spinner } from '@ui-kitten/components';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, StyleSheet, View } from 'react-native';
import { FadeInView, ScaleInView } from '@/utils/animations';
import { Colors } from '@/constants/Colors';
import { LoginProps } from './Interface';
import { styles } from './Styles';
import { ModalWithBackdropShowcase } from '../UI/ModalWithBackdropShowcase';

const Login = (props: LoginProps) => {
  const {
    isLoading,
    onSignIn,
    loginHeader,
    loginLogoAltText,
    loginSlogan,
    loginButtonText,
    loginPasswordPlaceholder,
    loginUsernamePlaceholder,
    forgotButton,
    forgotPasswordModalInstructions,
  } = props;

  /* TODO: Remove the values on the username and password for empty values once development is done */
  const [username, setUsername] = useState('rostyslav.budilka+da@appvales.com');
  const [password, setPassword] = useState('PasswordTemp456!');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = () => {
    // Validate form data here
    onSignIn(username, password);
  };

  return (
    <Layout style={styles.container}>
      <FadeInView style={styles.logo} duration={1000}>
        <Image
          source={require('@/assets/images/companylogo.png')}
          alt={loginLogoAltText}
          style={styles.logo}
        />
      </FadeInView>
      <FadeInView style={{ width: '100%' }} duration={1700}>
        {/* TODO: check if we want this title */}
        {/* <Text category='h1' style={styles.header}>
          {loginHeader}
        </Text> */}
        <Text category='p1' style={styles.slogan}>
          {loginSlogan}
        </Text>
        <Input
          value={username}
          onChangeText={setUsername}
          placeholder={loginUsernamePlaceholder}
          style={styles.input}
        />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder={loginPasswordPlaceholder}
          secureTextEntry={!showPassword}
          style={styles.input}
          accessoryRight={() => (
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={18}
              color={Colors.dark.icon}
              style={{ marginRight: 4 }}
              onPress={toggleShowPassword}
            />
          )}
        />
      </FadeInView>
      <ScaleInView style={styles.button}>
        <ModalWithBackdropShowcase
          title={forgotButton}
          description={forgotPasswordModalInstructions}
          buttonText='Ok'
        />
        <Button
          size='large'
          onPress={handleSignIn}
          style={styles.button}
          disabled={isLoading}
        >
          <Fragment>
            {!isLoading && <Text>{loginButtonText}</Text>}
            {isLoading && <Spinner status='control' />}
          </Fragment>
        </Button>
      </ScaleInView>
    </Layout>
  );
};

export default Login;
