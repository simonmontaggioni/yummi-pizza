import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logoutRequest, loginRequest } from '../../actions';

import { gravatar } from '../../utils';
import userIcon from '../../assets/static/icons/user-icon.svg';
import './Login.css';
import LoginBox from '../LoginBox/LoginBox';

const Login = (props) => {
  const [showLoginBox, setShowLoginBox] = useState(false);

  const isUserLogged = props.user.userName !== '' ? true : false;

  const handleLoginRequest = () => {
    setShowLoginBox(true);
  };

  const confirmLoginRequest = (isConfirmed) => {
    setShowLoginBox(false);
  };

  const handleLogout = () => {
    props.logoutRequest({ userName: '', email: '' });
  };

  return (
    <div className='login'>
      <div className='login-description'>
        <div>
          <span className='login-description__item'>
            {isUserLogged ? props.user.email : ''}
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
              src={gravatar(props.user.email)}
              alt={props.user.email}
              className='responsive'
            />
          ) : (
            <img src={userIcon} alt='' />
          )}
        </div>
      </div>
      {showLoginBox ? (
        <div className='login-container'>
          <LoginBox confirmLoginRequest={confirmLoginRequest} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userData,
  };
};

const mapDispatchToProps = {
  logoutRequest,
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
