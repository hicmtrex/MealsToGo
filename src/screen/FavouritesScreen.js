import React, { useContext } from 'react';
import { Text, TouchableOpacity, FlatList } from 'react-native';
import styled from 'styled-components';
import RestaurantInfoCard from '../components/ResturantCard';
import { Spacer } from '../components/spacer';
import { FavouritesContext } from '../services/favourites/FavouritesContext';
import { SafeArea } from '../utils/SafeArea';

const NoFavouritesArea = styled(SafeArea)`
  justify-content: center;
  align-items: center;
`;

const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <SafeArea>
      <FlatList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {
                  restaurant: item,
                })
              }
            >
              <Spacer position='bottom' size='large'>
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text>No Favourites yet</Text>
    </NoFavouritesArea>
  );
};

export default FavouritesScreen;
