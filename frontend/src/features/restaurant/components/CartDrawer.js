import React from 'react';
import styles from '../styles/CartDrawer.module.css';
import MenuItemCard from './MenuItemCard';

const CartDrawer = ({ cartItems, onClose, onCheckout, onRemoveItem }) => {
  return (
    <div className={styles.drawer}>
      {/* Close button in the top-right corner */}
      <button className={styles.closeButton} onClick={onClose}>
        ←
      </button>
      <div className={styles.header}>
        <h2 className={styles.title}>Cart Summary</h2>
        <p className={styles.description}>Review your items before checkout.</p>
      </div>
      <div className={styles.itemList}>
        {cartItems.map((item) => (
          <MenuItemCard 
            key={item.id} 
            item={item} 
            mode="remove" 
            onButtonClick={() => onRemoveItem(item.id)}
          />
        ))}
      </div>
      <div className={styles.footer}>
        <button className={styles.checkoutButton} onClick={onCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;