import React from 'react';

import styles from './Row.module.scss';

const Row = ({ first, second, third }) => {
  return (
    <>
      <div className={styles.row__first}>{first}</div>
      <div className={styles.row__second}>{second}</div>
      {third && <div className={styles.row__third}>{third}</div>}
    </>
  );
};

export default Row;
