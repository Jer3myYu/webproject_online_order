import React from 'react';
import styles from '../styles/DeliveryInfoForm.module.css';

const DeliveryInfoForm = ({ 
  formData, 
  setFormData, 
  disabled 
}) => {
  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            value={formData.firstName}
            onChange={handleChange('firstName')}
            disabled={disabled}
            className={disabled ? styles.inputDisabled : styles.input}
            placeholder="First Name"
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            value={formData.lastName}
            onChange={handleChange('lastName')}
            disabled={disabled}
            className={disabled ? styles.inputDisabled : styles.input}
            placeholder="Last Name"
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="tel"
            value={formData.phone}
            onChange={handleChange('phone')}
            disabled={disabled}
            className={disabled ? styles.inputDisabled : styles.input}
            placeholder="Phone Number"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            value={formData.streetAddress}
            onChange={handleChange('streetAddress')}
            disabled={disabled}
            className={disabled ? styles.inputDisabled : styles.input}
            placeholder="Street Address"
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            value={formData.city}
            onChange={handleChange('city')}
            disabled={disabled}
            className={disabled ? styles.inputDisabled : styles.input}
            placeholder="City"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            value={formData.state}
            onChange={handleChange('state')}
            disabled={disabled}
            className={disabled ? styles.inputDisabled : styles.input}
            placeholder="State/Province"
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            value={formData.zipCode}
            onChange={handleChange('zipCode')}
            disabled={disabled}
            className={disabled ? styles.inputDisabled : styles.input}
            placeholder="ZIP Code"
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            disabled={disabled}
            className={disabled ? styles.inputDisabled : styles.input}
            placeholder="Email"
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfoForm; 