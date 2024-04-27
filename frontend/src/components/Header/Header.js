import React from 'react';
import { GiCampfire } from "react-icons/gi";
import { Link } from 'react-router-dom';
import classes from './header.module.css'
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';


const Header = () => {
  const {user, logout} = useAuth();
  const {cart} = useCart();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          <span>Fast Food</span> <GiCampfire className={classes.icon}/>
        </Link>
        <nav>
          <ul>
            {
              user? (
              <li className={classes.menu_container}>
                <Link to="/profile">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">Orders</Link>
                  <a onClick={logout}>Logout</a>
                </div>
              </li>
              ) : (
                <Link to="/login">Login</Link>
              )}
              <li>
                <Link to="/cart">
                  <span>Cart </span>
                  {cart.totalCount > 0 &&
                  <span className={classes.cart_count}>{cart.totalCount}</span>}
                </Link>
              </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
