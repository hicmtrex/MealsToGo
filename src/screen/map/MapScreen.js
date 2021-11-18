import React, { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import styled from 'styled-components';
import { LocationContext } from '../../services/location/location.context';
import { RestaurantsContext } from '../../services/restaurants/restarants.context';
import MapCallout from './MapCallout';
import SearchMap from './SearchMap';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <SearchMap />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          >
            <Callout
              onPress={() =>
                navigation.navigate('RestaurantDetail', { restaurant })
              }
            >
              <MapCallout restaurant={restaurant} />
            </Callout>
          </Marker>
        ))}
      </Map>
    </>
  );
};

export default MapScreen;
