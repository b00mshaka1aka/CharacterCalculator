import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styles from './Header.module.scss';

const pages = [
  {
    title: 'Change parameters',
    link: '/parameters',
  },
  {
    title: 'Training skills',
    link: '/training',
  },
];

const logo = 'Character constructor';

const Header = () => {
  const [current, setCurrent] = useState(-1);

  return (
    <div className={styles.header}>
      <div onClick={() => setCurrent(-1)} className={styles.logo}>
        <Link to="/" className={styles.nav__logo}>
          {logo}
        </Link>
      </div>
      <nav className={styles.nav}>
        {pages.map((el, index) => (
          <Link
            key={index}
            to={el.link}
            onClick={() => setCurrent(index)}
            className={styles.nav__link + ' ' + (current === index ? styles.active : '')}>
            {el.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
