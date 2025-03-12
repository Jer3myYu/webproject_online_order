import React from 'react';
import styles from './MenuItemCard.module.css';
import classNames from 'classnames';

const MenuItemCard = ({ item, mode }) => {
  // mode: "add" for menu page, "remove" for cart drawer
  // Handler for adding a food item to the cart
  const handleAddToCart = () => {
    console.log(`Added ${item.name} to cart`);
    // Later, add integration with your cart logic here
  };

  return (
    <div className={styles.card}>
      <img src={item.imageUrl} alt={item.name} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.price}>${item.price}</p>
      </div>
      <button 
        className={classNames(styles.actionButton, {
          [styles.addButton]: mode === 'add',
          [styles.removeButton]: mode === 'remove'
        })}
        onClick={handleAddToCart}
      >
        {mode === 'add' ? '+' : '−'}
      </button>
    </div>
  );
};

export default MenuItemCard;
