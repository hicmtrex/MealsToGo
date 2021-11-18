import React, { useState, useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper';
import {
  AccountContainer,
  AccountBackground,
  AccountCover,
  AccountInput,
  ErrorContainer,
  TitleRegister,
} from '../../components/AccountStyles';
import { Spacer } from '../../components/spacer';
import { colors } from '../../infrastructure/colors';
import { AuthContext } from '../../services/authentication/AuthContext';

const RegisterScreen = ({ navigation }) => {
  const { register, error, loading } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedP, setRepeatedP] = useState('');

  return (
    <AccountBackground>
      <AccountCover />
      <TitleRegister>Meals To Go</TitleRegister>
      <AccountContainer>
        <Spacer size='large'>
          <AccountInput
            value={email}
            onChangeText={(u) => setEmail(u)}
            textContentType='emailAddress'
            keyboardType='email-address'
            label='E-mail'
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
          />
        </Spacer>
        <Spacer size='large'>
          <AccountInput
            value={repeatedP}
            onChangeText={(ps) => setRepeatedP(ps)}
            label='repeated password'
            textContentType='password'
            secureTextEntry
            autoCapitalize='none'
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
              icon='email'
              mode='contained'
              color={colors.brand.primary}
              onPress={() => register(email, password, repeatedP)}
            >
              Register
            </Button>
          ) : (
            <ActivityIndicator animating={true} color={colors.brand.primary} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size='large'>
        <Button
          style={styles.back}
          onPress={() => navigation.goBack()}
          mode='contained'
        >
          Back
        </Button>
      </Spacer>
    </AccountBackground>
  );
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#2182BD',
    padding: 4,
    position: 'relative',
    top: 200,
  },
});

export default RegisterScreen;
