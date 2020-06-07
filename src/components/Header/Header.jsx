import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';
import CoinSelector from '../CoinSelector/CoinSelector';
import Login from '../Login/Login';

const Header = (props) => {
  const isUserLogged = props.user.userName !== '' ? true : false;
  return (
    <header className='header'>
      <nav className='header__nav'>
        <div className='nav__title'>
          <Link to='/'>
            <span>The Yummi Pizza</span>
          </Link>
        </div>
        <div className='nav__items'>
          <div className='nav__item'>
            <Login />
          </div>
          {!isUserLogged && <div className='nav__item'>Signup</div>}
          <div className='nav__item'>
            <CoinSelector />
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userData,
  };
};

export default connect(mapStateToProps, null)(Header);
