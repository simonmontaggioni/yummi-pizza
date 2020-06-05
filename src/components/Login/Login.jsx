import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logoutRequest, loginRequest } from '../../actions';

import { gravatar } from '../../utils';
import userIcon from '../../assets/static/icons/user-icon.svg';
import './Login.css';
import LoginBox from '../LoginBox/LoginBox';

const Login = (props) => {
  const [showLoginBox, setShowLoginBox] = useState(false);
  const [showLoginNotification, setShowLoginNotification] = useState(false);

  const isUserLogged = props.user.userName !== '' ? true : false;

  const handleLoginRequest = () => {
    setShowLoginBox(true);
  };

  const confirmLoginRequest = (isConfirmed) => {
    setShowLoginBox(false);
    setShowLoginNotification(true);
    setTimeout(hideNotification, 5000);
  };

  const handleLogout = () => {
    props.logoutRequest({ userName: '', email: '' });
    hideNotification();
  };

  const hideNotification = () => {
    setShowLoginNotification(false);
  };

  return (
    <div className='login-area'>
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
        {isUserLogged ? (
          <img
            src={gravatar(props.user.email)}
            alt={props.user.email}
            className='icon-login'
          />
        ) : (
          <img src={userIcon} alt='' className='icon-login' />
        )}
        {showLoginNotification && (
          <div className='notification' onClick={hideNotification}>
            {'Welcome ' + props.user.userName}
          </div>
        )}
      </div>
      {showLoginBox && (
        <div className='login-dialog'>
          <LoginBox confirmLoginRequest={confirmLoginRequest} />
        </div>
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
