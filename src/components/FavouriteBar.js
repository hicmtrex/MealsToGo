import React from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import CompactRestaurantInfo from './CompactRestaurantInfo';
import { Spacer } from './spacer';

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const FavouriteBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variant='left.large'>
        <Text variant='caption'>Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;

          return (
            <Spacer position='left' size='medium' key={key}>
              <TouchableOpacity
                onPress={() =>
                  onNavigate('RestaurantDetail', {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouriteBar;
