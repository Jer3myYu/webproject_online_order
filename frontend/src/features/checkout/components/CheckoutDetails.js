import React, { useState } from 'react';
import styles from '../styles/CheckoutDetails.module.css';

const CheckoutDetails = ({
  selectedPayment,
  setSelectedPayment,
  deliveryInfoEditable,
  setDeliveryInfoEditable
}) => {
  const [deliveryAddress, setDeliveryAddress] = useState('123 Main St, City, State');
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handlePaymentChange = (method) => {
    setSelectedPayment(method);
  };

  const toggleDeliveryInfo = () => {
    setDeliveryInfoEditable(!deliveryInfoEditable);
  };

  return (
    <div className={styles.checkoutDetails}>
      <h2 className={styles.greeting}>
        Hi, {firstName} {lastName}
      </h2>
      <div className={styles.addressSection}>
        <p className={styles.address}>{deliveryAddress}</p>
        <button className={styles.changeButton} onClick={toggleDeliveryInfo}>
          Change Delivery Information
        </button>
      </div>
      <h3 className={styles.sectionTitle}>Delivery Information</h3>
      <div className={styles.deliveryInfo}>
        <input
          type="text"
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
          disabled={!deliveryInfoEditable}
          className={deliveryInfoEditable ? styles.inputActive : styles.inputDisabled}
          placeholder="Enter your delivery address"
        />
      </div>
      <h3 className={styles.sectionTitle}>Payment</h3>
      <div className={styles.paymentOptions}>
        <button
          className={selectedPayment === 'credit' ? styles.selected : ''}
          onClick={() => handlePaymentChange('credit')}
        >
          Credit Card
        </button>
        <button
          className={selectedPayment === 'paypal' ? styles.selected : ''}
          onClick={() => handlePaymentChange('paypal')}
        >
          Paypal
        </button>
      </div>
      {selectedPayment === 'credit' && (
        <div className={styles.creditCardForm}>
          <input
            type="text"
            placeholder="Card Number"
            value={creditCardInfo.cardNumber}
            onChange={(e) =>
              setCreditCardInfo({ ...creditCardInfo, cardNumber: e.target.value })
            }
            className={styles.inputActive}
          />
          <input
            type="text"
            placeholder="Expiry Date"
            value={creditCardInfo.expiry}
            onChange={(e) =>
              setCreditCardInfo({ ...creditCardInfo, expiry: e.target.value })
            }
            className={styles.inputActive}
          />
          <input
            type="text"
            placeholder="CVV"
            value={creditCardInfo.cvv}
            onChange={(e) =>
              setCreditCardInfo({ ...creditCardInfo, cvv: e.target.value })
            }
            className={styles.inputActive}
          />
        </div>
      )}
      <button className={styles.checkoutButton}>Check Out</button>
    </div>
  );
};

export default CheckoutDetails;
