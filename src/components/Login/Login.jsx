import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../../actions';

import { gravatar } from '../../utils';
import userIcon from '../../assets/static/icons/user-icon.svg';
import './Login.css';
import LoginBox from '../LoginBox/LoginBox';

const apiLoginRequest = (user, password) => {
  const appPassword = '12345';
  const appUser = 'user';

  if (user === appUser && appPassword === password) {
    return true;
  } else {
    return false;
  }
};

const Login = (props) => {
  const [showLoginBox, setShowLoginBox] = useState({ showLoginBox: false });
  const { user } = props;
  if (user) {
    user.email = 'email@email.com';
  }
  const isUserLogged = false; //Object.keys(user).length > 0;

  const handleLoginRequest = () => {
    setShowLoginBox(!showLoginBox);
  };

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <div className='login'>
      <div className='login-description'>
        <div>
          <span className='login-description__item'>
            {isUserLogged ? user.email : ''}
          </span>
        </div>
        <div className='login-description__item'>
          {isUserLogged ? (
            <div onClick={handleLogout}>
              <span>Log Out</span>
            </div>
          ) : (
            <div onClick={handleLoginRequest}>
              <span>Log In</span>
            </div>
          )}
        </div>
      </div>
      <div className='icon-wrapper'>
        <div className='icon-login'>
          {isUserLogged ? (
            <img
              src={gravatar(user.email)}
              alt={user.email}
              className='responsive'
            />
          ) : (
            <img src={userIcon} alt='' />
          )}
        </div>
      </div>
      {true ? (
        <div className='login-container'>
          <LoginBox />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
