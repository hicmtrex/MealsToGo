import React, { useState, useContext } from 'react';
import { Text } from 'react-native';
//import LottieView from 'lottie-react-native';
import { ActivityIndicator, Button } from 'react-native-paper';
import {
  AccountContainer,
  AccountBackground,
  AccountCover,
  AccountInput,
  TitleAuth,
  GoBackBtn,
  ErrorContainer,
} from '../../components/AccountStyles';
import { Spacer } from '../../components/spacer';
import { colors } from '../../infrastructure/colors';
import { AuthContext } from '../../services/authentication/AuthContext';

const LoginScreen = ({ navigation }) => {
  const { login, error, loading } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AccountBackground>
      <AccountCover />

      <TitleAuth>Meals To Go</TitleAuth>

      <AccountContainer>
        <Spacer size='large'>
          <AccountInput
            value={email}
            onChangeText={(u) => setEmail(u)}
            textContentType='emailAddress'
            keyboardType='email-address'
            label='E-mail'
            placeholder='email'
          />
        </Spacer>
        <Spacer size='large'>
          <AccountInput
            value={password}
            onChangeText={(p) => setPassword(p)}
            label='Password'
            textContentType='password'
            secureTextEntry
            autoCapitalize='none'
            placeholder='password'
          />
        </Spacer>
        {error && (
          <Spacer size='large'>
            <ErrorContainer>
              <Text style={{ color: 'red', fontWeight: 'bold' }}>{error}</Text>
            </ErrorContainer>
          </Spacer>
        )}
        <Spacer size='large'>
          {!loading ? (
            <Button
              icon='lock-open-outline'
              mode='contained'
              color={colors.brand.primary}
              onPress={() => login(email, password)}
            >
              Login
            </Button>
          ) : (
            <ActivityIndicator animating={true} color={colors.brand.primary} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size='large'>
        <GoBackBtn onPress={() => navigation.goBack()} mode='contained'>
          Back
        </GoBackBtn>
      </Spacer>
    </AccountBackground>
  );
};

export default LoginScreen;
