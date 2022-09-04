import React from 'react';

import styles from './AddParameterValue.module.scss';

const AddParameterValue = ({ value, onClickPlus, onClickMinus }) => {
  return (
    <div className={styles.root}>
      <i onClick={onClickPlus} className={`fa-solid fa-circle-plus ${styles.icons}`}></i>
      {value}
      <i onClick={onClickMinus} className={`fa-solid fa-circle-minus ${styles.icons}`}></i>
    </div>
  );
};

export default AddParameterValue;
