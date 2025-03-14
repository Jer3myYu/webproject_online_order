import React, { useState } from 'react';
import AuthHeader from '../../auth/components/AuthHeader';
import OrderSummary from '../components/OrderSummary';
import CheckoutDetails from '../components/CheckoutDetails';
import styles from '../styles/Checkout.module.css';

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [deliveryInfoEditable, setDeliveryInfoEditable] = useState(false);

  // Mock cart items for demonstration
  const cartItems = [
    { id: 1, name: 'Chicken Fries - 9 Pc', price: 4.89 },
    { id: 2, name: 'Whopper Meal', price: 10.59 }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const deliveryFee = 2.99;
  const taxes = 0.99;
  const total = subtotal + deliveryFee + taxes;

  const handleNextStep = () => {
    setActiveStep(1);
  };

  return (
    <div className={styles.checkoutPage}>
      <AuthHeader />
      <div className={styles.container}>
        {/* Left Panel: Order Summary */}
        <div
          className={
            activeStep === 0
              ? styles.leftPanel
              : `${styles.leftPanel} ${styles.leftPanelShifted}`
          }
        >
          <OrderSummary
            cartItems={cartItems}
            deliveryMethod={deliveryMethod}
            setDeliveryMethod={setDeliveryMethod}
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            taxes={taxes}
            total={total}
            onNextStep={handleNextStep}
          />
        </div>
        {/* Right Panel: Checkout Details */}
        {activeStep === 1 && (
          <div className={styles.rightPanel}>
            <CheckoutDetails
              selectedPayment={selectedPayment}
              setSelectedPayment={setSelectedPayment}
              deliveryInfoEditable={deliveryInfoEditable}
              setDeliveryInfoEditable={setDeliveryInfoEditable}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
