import React from 'react';
import AuthHeader from '../../../auth/components/AuthHeader';
import MenuItemCard from '../../components/MenuItemCard';
import styles from './MenuItems.module.css';
import itemData from '../../components/menuItemMock.json';

const RestaurantFoodList = () => {
  // Handler for the back button (implement navigation as needed)
  const handleBack = () => {
    console.log('Back button clicked');
    // e.g., useNavigate() hook to go back or to a specific route
  };

  // Handler for the cart button (navigate to cart page later)
  const handleCart = () => {
    console.log('Cart button clicked');
    // e.g., useNavigate() hook to go to the cart page
  };

  return (
    <div className={styles.container}>
      <AuthHeader />
      <div className={styles.main}>
        {/* Top bar with back and cart icon buttons */}
        <div className={styles.topBar}>
          <button className={styles.iconButton} onClick={handleBack}>
            ←
          </button>
        </div>

        {/* Grid of item cards */}
        <div className={styles.itemGrid}>
          {itemData.map((item) => (
            <MenuItemCard key={item.id} item={item} mode="remove" />
          ))}
        </div>
        <div className={styles.topBar}>
          <button className={styles.iconButton} onClick={handleCart}>
            🛒
        </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantFoodList;