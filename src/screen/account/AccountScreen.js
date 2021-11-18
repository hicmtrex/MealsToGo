import React from 'react';

import LottieView from 'lottie-react-native';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
  Title,
} from '../../components/AccountStyles';
import { Spacer } from '../../components/spacer';

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key='animation'
          autoPlay
          loop
          resizeMode='cover'
          source={require('../../../assets/watermelon.json')}
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon='lock-open-outline'
          mode='contained'
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <Spacer size='large'>
          <AuthButton
            icon='email'
            mode='contained'
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
