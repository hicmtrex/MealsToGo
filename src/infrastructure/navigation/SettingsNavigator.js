import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import CameraScreen from '../../screen/CameraScreen';
import FavouritesScreen from '../../screen/FavouritesScreen';
import SettingsScreen from '../../screen/SettingsScreen';

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerMode: 'screen',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen name='SettingsScreen' component={SettingsScreen} />
      <SettingsStack.Screen name='Camera' component={CameraScreen} />
      <SettingsStack.Screen name='Favourites' component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
