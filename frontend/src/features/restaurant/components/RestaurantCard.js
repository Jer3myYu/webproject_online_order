import React from 'react';
import styles from './RestaurantCard.module.css';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className={styles.card}>
      {/* Blurry background covering the whole card */}
      <div
        className={styles.cardBackground}
        style={{ backgroundImage: `url(${restaurant.imageUrl})` }}
      />
      <div className={styles.cardOverlay} />
      {/* Card content: image and info overlay */}
      <div className={styles.cardContent}>
        <div className={styles.imageContainer}>
          <img
            src={restaurant.imageUrl}
            alt={restaurant.name}
            className={styles.restaurantImage}
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{restaurant.name}</h3>
          <p className={styles.address}>{restaurant.address}</p>
          <p className={styles.phone}>{restaurant.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;