import React, { useState } from 'react';
import AuthHeader from '../../../auth/components/AuthHeader';
import MenuItemCard from '../../components/MenuItemCard';
import styles from '../../styles/MenuItems.module.css';
import itemData from '../../data/menuItemMock.json';
import CartDrawer from '../../components/CartDrawer';
const RestaurantFoodList = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Handler for the back button (implement navigation as needed)
  const handleBack = () => {
    console.log('Back button clicked');
    // e.g., useNavigate() hook to go back or to a specific route
  };

  // Handler for the cart button (navigate to cart page later)
  const handleCart = () => {
    console.log('Cart button clicked');
    setIsCartOpen(true);
  };

  const handleAddItem = (item) => {
    // Add item to cart logic here
    setCartItems([...cartItems, item]);
  };

  const handleRemoveItem = (itemId) => {
    // Remove item from cart logic
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const handleCheckout = () => {
    console.log('Checkout clicked');
    // Navigate to checkout page or process order
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
            <MenuItemCard
              key={item.id}
              item={item} 
              mode="add" 
              onButtonClick={() => handleAddItem(item)}
            />
          ))}
        </div>

        {/* Bottom bar with cart icon button */}
        <div className={styles.topBar}>
          <button className={styles.iconButton} onClick={handleCart}>
            🛒
          </button>
        </div>
      </div>

      {/* Conditionally render the cart drawer */}
      {isCartOpen && (
        <CartDrawer
          cartItems={cartItems}
          onClose={() => setIsCartOpen(false)}
          onCheckout={handleCheckout}
          onRemoveItem={handleRemoveItem}
        />
      )}
    </div>
  );
};

export default RestaurantFoodList;