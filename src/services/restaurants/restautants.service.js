import { mocks, mockImages } from './mock';
import camelize from 'camelize';

export const resturantsRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) reject('Not found');
    resolve(mock);
  });
};

export const resturantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      address: restaurant.vicinity,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });
  const newResult = camelize(mappedResults);
  return newResult;
};
