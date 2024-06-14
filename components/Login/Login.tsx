import React, { useState } from 'react';
import { Layout, Text, Input, Button } from '@ui-kitten/components';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'react-native';
import { FadeInView, ScaleInView } from '@/utils/animations';
import { Colors } from '@/constants/Colors';
import { LoginProps } from './Interface';
import { styles } from './Styles';

const Login = (props: LoginProps) => {
  const {
    onSignIn,
    loginHeader,
    loginLogoAltText,
    loginSlogan,
    loginButtonText,
    loginPasswordPlaceholder,
    loginUsernamePlaceholder,
  } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
        <Text category='h1' style={styles.header}>
          {loginHeader}
        </Text>
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
        <Button size='large' onPress={handleSignIn} style={styles.button}>
          {loginButtonText}
        </Button>
      </ScaleInView>
    </Layout>
  );
};

export default Login;
