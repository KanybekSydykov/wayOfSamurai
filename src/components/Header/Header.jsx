import React from 'react';
import s from './Header.module.css';

function Header () {
    return (
      <header className={s.Header}>
        <img
          src="https://pbs.twimg.com/profile_images/1203413177897291776/pRWO1FAO.jpg"
          alt=""
        ></img>
      </header>
    );
}

export default Header;