import React from 'react';
import styles from './MenuItemCard.module.css';

const MenuItemCard = ({ food }) => {
  // Handler for adding a food item to the cart
  const handleAddToCart = () => {
    console.log(`Added ${food.name} to cart`);
    // Later, add integration with your cart logic here
  };

  return (
    <div className={styles.card}>
      <img src={food.imageUrl} alt={food.name} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>{food.name}</h3>
        <p className={styles.price}>{food.price}</p>
      </div>
      <button className={styles.addButton} onClick={handleAddToCart}>
        +
      </button>
    </div>
  );
};

export default MenuItemCard;
