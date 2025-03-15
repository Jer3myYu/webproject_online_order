import React, { useState } from 'react';
import styles from '../styles/CheckoutDetails.module.css';
import DeliveryInfoForm from './DeliveryInfoForm';
import CreditCardForm from './CreditCardForm';

const CheckoutDetails = ({
  selectedPayment,
  setSelectedPayment,
  deliveryInfoEditable,
  setDeliveryInfoEditable
}) => {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '',
    streetAddress: '123 Main St',
    city: 'City',
    state: 'State',
    zipCode: '',
    email: ''
  });

  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: '',
    cvv: '',
    nameOnCard: '',
    expiry: ''
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
        Hi, {formData.firstName} {formData.lastName}
      </h2>
      <div className={styles.addressSection}>
        <p className={styles.address}>{formData.streetAddress}, {formData.city}, {formData.state}</p>
        <button className={styles.changeButton} onClick={toggleDeliveryInfo}>
          Change Delivery Information
        </button>
      </div>
      <h3 className={styles.sectionTitle}>Delivery Information</h3>
      <div className={styles.deliveryInfo}>
        <DeliveryInfoForm
          formData={formData}
          setFormData={setFormData}
          disabled={!deliveryInfoEditable}
        />
      </div>
      <h3 className={styles.sectionTitle}>Payment</h3>
      <div className={styles.paymentOptions}>
        <div className={styles.paymentOption}>
          <input
            type="radio"
            id="credit"
            name="paymentMethod"
            checked={selectedPayment === 'credit'}
            onChange={() => handlePaymentChange('credit')}
          />
          <label htmlFor="credit">Credit Card</label>
        </div>
        <div className={styles.paymentOption}>
          <input
            type="radio"
            id="paypal"
            name="paymentMethod"
            checked={selectedPayment === 'paypal'}
            onChange={() => handlePaymentChange('paypal')}
          />
          <label htmlFor="paypal">Paypal</label>
        </div>
      </div>
      {selectedPayment === 'credit' && (
        <div className={styles.creditCardForm}>
          <CreditCardForm
            formData={creditCardInfo}
            setFormData={setCreditCardInfo}
          />
        </div>
      )}
      <button className={styles.checkoutButton}>Check Out</button>
    </div>
  );
};

export default CheckoutDetails;
