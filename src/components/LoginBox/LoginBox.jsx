import React from 'react';
import './LoginBox.css';

const LoginBox = () => {
  return (
    <div className='login-box'>
      <div className='login-box__card'>
        <div className='login-box__card-header'>
          <span>Welcome to</span>
          <span>Yummi Pizza</span>
        </div>
        <div className='login-box__card-body'>
          <div className='login-input-wrapper'>
            <input
              className='login-input'
              type='text'
              name='user'
              id='user'
              placeholder='Insert your username'
            />
            <input
              className='login-input'
              type='password'
              name='password'
              id='password'
              placeholder='Insert your password'
            />
          </div>
        </div>
        <div className='login-box__card-footer'>
          <button className='footer-card__button footer-card__button--cancel'>
            cancel
          </button>
          <button className='footer-card__button footer-card__button--login'>
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
