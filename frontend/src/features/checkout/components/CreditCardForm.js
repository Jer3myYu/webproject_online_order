import React from 'react';
import styles from '../styles/CreditCardForm.module.css';

const CreditCardForm = ({ 
  formData, 
  setFormData 
}) => {
  const handleChange = (field) => (e) => {
    let value = e.target.value;
    
    // Format card number with spaces
    if (field === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }
    
    // Format expiry date
    if (field === 'expiry') {
      value = value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
      }
    }

    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.row}>
        <div className={`${styles.inputGroup} ${styles.wide}`}>
          <input
            type="text"
            value={formData.cardNumber}
            onChange={handleChange('cardNumber')}
            className={styles.input}
            placeholder="Card Number (#### #### #### ####)"
            maxLength="19"
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            value={formData.cvv}
            onChange={handleChange('cvv')}
            className={styles.input}
            placeholder="CVV (###)"
            maxLength="3"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={`${styles.inputGroup} ${styles.wide}`}>
          <input
            type="text"
            value={formData.nameOnCard}
            onChange={handleChange('nameOnCard')}
            className={styles.input}
            placeholder="Name on Card"
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            value={formData.expiry}
            onChange={handleChange('expiry')}
            className={styles.input}
            placeholder="Expiration Date (MM/YY)"
            maxLength="5"
          />
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm; 