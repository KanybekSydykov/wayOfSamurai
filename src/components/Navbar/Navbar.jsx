import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navbar.module.css';


const Navbar = (props) => {



   
    return (
      <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active} >Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
      <div className={s.item}>
        <a>Friends</a>
       {/* <div>{friendElement}</div> */}
      </div>

    </nav>
    );
}

export default Navbar;