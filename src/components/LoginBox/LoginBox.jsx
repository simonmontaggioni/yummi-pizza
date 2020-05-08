import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions';
import './LoginBox.css';

const apiLoginRequest = (userName, password) => {
  const appUser = 'user';
  const appPassword = '12345';

  if (userName === appUser && appPassword === password) {
    return { userName: 'user', email: 'user@email.com' };
  } else {
    return { userName: '' };
  }
};

const LoginBox = (props) => {
  const [userData, setUserData] = useState({ userName: '', password: '' });
  const handleUserInputChange = (event) => {
    const userName = event.target.value;
    setUserData({ ...userData, userName: userName });
  };
  const handlePasswordInputChange = (event) => {
    const password = event.target.value;
    setUserData({ ...userData, password: password });
  };
  const handleCancelClick = () => {
    props.confirmLoginRequest(false);
  };
  const handleLoginClick = () => {
    const registeredUser = apiLoginRequest(
      userData.userName,
      userData.password
    );
    if (registeredUser.userName !== '') {
      props.loginRequest(registeredUser);
    }
    props.confirmLoginRequest(true);
  };

  return (
    <div className='login-box'>
      <div className='login-box__card'>
        <div className='login-box__card-header'>
          <span>Welcome to</span>
          <span>Yummi Pizza</span>
        </div>
        <div className='login-box__card-body'>
          <form>
            <div className='login-input-wrapper'>
              <input
                className='login-input'
                type='text'
                name='user'
                id='user'
                placeholder='Insert your username'
                onChange={handleUserInputChange}
              />
              <input
                className='login-input'
                type='password'
                name='password'
                id='password'
                placeholder='Insert your password'
                onChange={handlePasswordInputChange}
              />
            </div>
          </form>
        </div>
        <div className='login-box__card-footer'>
          <button
            className='footer-card__button footer-card__button--cancel'
            onClick={handleCancelClick}
          >
            cancel
          </button>
          <button
            className='footer-card__button footer-card__button--login'
            onClick={handleLoginClick}
          >
            login
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(LoginBox);
