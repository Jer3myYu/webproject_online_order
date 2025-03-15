import React from 'react';
import styles from '../styles/OrderItemCard.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const OrderItemCard = ({ item, onRemove }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        {/* <span role="img" aria-label="cart">🛒</span> */}
        <ShoppingCartOutlinedIcon style={{ width: '32px', height: '32px' }} />
      </div>
      <div className={styles.details}>
        <div className={styles.title}>
          {item.name} (${item.price.toFixed(2)})
        </div>
        <div className={styles.description}>
          {item.description}
        </div>
      </div>
      {onRemove && (
        <button className={styles.removeButton} onClick={() => onRemove(item.id)}>
          Remove
        </button>
      )}
    </div>
  );
};

export default OrderItemCard;
