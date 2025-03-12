import React from 'react';
import styles from '../styles/MenuItemCard.module.css';
import classNames from 'classnames';

const MenuItemCard = ({ item, mode, onButtonClick }) => {
  // mode: "add" for menu page, "remove" for cart drawer

  return (
    <div className={styles.card}>
      <img src={item.imageUrl} alt={item.name} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.price}>${item.price}</p>
      </div>
      <button 
        className={classNames(styles.actionButton, {
          [styles.addButton]: mode === 'add',
          [styles.removeButton]: mode === 'remove'
        })}
        onClick={onButtonClick}
      >
        {mode === 'add' ? '+' : '−'}
      </button>
    </div>
  );
};

export default MenuItemCard;
