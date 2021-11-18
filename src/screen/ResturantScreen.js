import React, { useContext, useState } from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import ResturantCard from '../components/ResturantCard';
import styled from 'styled-components/native';
import { SafeArea } from '../utils/SafeArea';
import { RestaurantsContext } from '../services/restaurants/restarants.context';
import { ActivityIndicator, Colors } from 'react-native-paper';
import SearchBox from '../components/SearchBox';
import { FavouritesContext } from '../services/favourites/FavouritesContext';
import FavouriteBar from '../components/FavouriteBar';
import FadeAnimations from '../components/animations/FadeAnimations';

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const ResturantScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer
          style={{ postion: 'absolute', top: '50%', left: '50%' }}
        >
          <Loading
            style={{ marginLeft: -25 }}
            animating={true}
            color={Colors.blue300}
          />
        </LoadingContainer>
      )}
      <SearchBox
        isToggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouriteBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RestaurantDetail', { restaurant: item })
            }
          >
            <FadeAnimations>
              <ResturantCard restaurant={item} />
            </FadeAnimations>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({});

export default ResturantScreen;
