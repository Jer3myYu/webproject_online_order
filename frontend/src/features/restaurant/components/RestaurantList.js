import React from 'react';
import restaurants from './restaurantMock.json';
import RestaurantCard from './RestaurantCard';

const RestaurantList = () => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;