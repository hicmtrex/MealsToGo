import React, { useState, useEffect, useContext } from 'react';
import { LocationContext } from '../location/location.context';
import { resturantsRequest, resturantsTransform } from './restautants.service';

export const RestaurantsContext = React.createContext();

const RestautansContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      resturantsRequest(loc)
        .then(resturantsTransform)
        .then((results) => {
          setLoading(false);
          setRestaurants(results);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location?.lat},${location?.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  const values = {
    restaurants,
    isLoading,
    error,
  };

  return (
    <RestaurantsContext.Provider value={values}>
      {children}
    </RestaurantsContext.Provider>
  );
};

export default RestautansContextProvider;
