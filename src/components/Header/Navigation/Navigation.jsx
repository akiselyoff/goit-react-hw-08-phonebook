import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink to="/" className="btn">
      Home
    </NavLink>
    <NavLink to="/contacts" className="btn">
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
