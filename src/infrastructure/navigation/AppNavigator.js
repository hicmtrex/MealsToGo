import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantsNavigator from './RestaurantsNavigator';
import MapScreen from '../../screen/map/MapScreen';
import FavouritesContextProvider from '../../services/favourites/FavouritesContext';
import LocationContextProvider from '../../services/location/location.context';
import RestautansContextProvider from '../../services/restaurants/restarants.context';
import SettingsNavigator from './SettingsNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestautansContextProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Restaurants') {
                iconName = 'md-restaurant';
              } else if (route.name === 'Settings') {
                iconName = 'md-settings';
              } else if (route.name === 'Map') {
                iconName = 'md-map';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
          <Tab.Screen name='Map' component={MapScreen} />
          <Tab.Screen name='Settings' component={SettingsNavigator} />
        </Tab.Navigator>
      </RestautansContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
export default AppNavigator;
