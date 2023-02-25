<<<<<<< HEAD
import React, { useContext } from 'react';
import AuthContext from '../context/auth-context';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            {' '}
            <a href="/">Users</a>{' '}
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            {' '}
            <a href="/">Admin</a>{' '}
          </li>
        )}
        {ctx.isLoggedIn && (
=======
import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
>>>>>>> a5928bacde42912a01cc8f80f30e55f752a5e3ff
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
