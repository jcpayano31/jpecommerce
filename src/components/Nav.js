import React from 'react';
import CartIcon from './svg/shopping-cart-solid.svg';
import { Link } from 'react-router-dom';
import './css/Nav.css';
import { useStateValue } from '../StateProvider';

function Nav() {
  const [{ basket }] = useStateValue();

  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">JP Super Store</Link>
        </h1>
      </div>
      <nav>
      <ul className="toggle">
        <li>
          <Link to="/">Home</Link>{' '}
        </li>
        <li>
          <Link to="/products">Product</Link>{' '}
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div className="nav-cart">
        <span>{basket?.length}</span>

        <Link to="/checkout">
          <img src={CartIcon} alt="" width="20" />
        </Link>
      </div>
      </nav>
    </header>
  );
}

export default Nav;
