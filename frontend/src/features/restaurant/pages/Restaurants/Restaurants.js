import React from 'react';
import restaurants from '../../components/restaurantMock.json';
import RestaurantCard from '../../components/RestaurantCard';

const Restaurants = () => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default Restaurants;