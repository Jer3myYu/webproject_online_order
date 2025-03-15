import React from 'react';
import styles from '../styles/OrderSummary.module.css';
import OrderItemCard from './OrderItemCard';

const OrderSummary = ({
  cartItems,
  deliveryMethod,
  setDeliveryMethod,
  subtotal,
  deliveryFee,
  taxes,
  total,
  onNextStep,
  onRemoveItem
}) => {
  return (
    <div className={styles.orderSummary}>
      <h2 className={styles.title}>Order Summary</h2>
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <OrderItemCard 
            key={item.id} 
            item={item} 
            onRemove={() => onRemoveItem(item.id)} 
          />
        ))}
      </div>
      <h3 className={styles.subtitle}>Delivery Method</h3>
      <div className={styles.deliveryOptions}>
        <div className={styles.deliveryOption}>
          <input
            type="radio"
            id="delivery"
            name="deliveryMethod"
            checked={deliveryMethod === 'delivery'}
            onChange={() => setDeliveryMethod('delivery')}
          />
          <label htmlFor="delivery">Delivery</label>
        </div>
        <div className={styles.deliveryOption}>
          <input
            type="radio"
            id="pickup"
            name="deliveryMethod"
            checked={deliveryMethod === 'pickup'}
            onChange={() => setDeliveryMethod('pickup')}
          />
          <label htmlFor="pickup">Pickup</label>
        </div>
      </div>
      <div className={styles.summaryTotals}>
        <div className={styles.row}>
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className={styles.row}>
          <span>Delivery Fee:</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className={styles.row}>
          <span>Taxes:</span>
          <span>${taxes.toFixed(2)}</span>
        </div>
        <div className={styles.rowTotal}>
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <button className={styles.nextStepButton} onClick={onNextStep}>
        Next Step
      </button>
    </div>
  );
};

export default OrderSummary;