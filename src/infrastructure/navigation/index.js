import React, { useContext } from 'react';
import { AuthContext } from '../../services/authentication/AuthContext';
import AccountNavigator from './AccountNavigator';
import AppNavigator from './AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Navigation = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
