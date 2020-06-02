import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions';
import Api from '../../Api';
import Spinner from '../Spinner/Spinner';
import './LoginBox.css';

const LoginBox = (props) => {
  const [userData, setUserData] = useState({ userName: '', password: '' });
  const [loading, setLoading] = useState(false);

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

  const handleLoginClick = async () => {
    setLoading(true);

    const registeredUser = await apiLoginRequest(
      userData.userName,
      userData.password
    );

    if (registeredUser.userName !== '') {
      props.loginRequest(registeredUser);
    }

    props.confirmLoginRequest(false);
  };

  const apiLoginRequest = async (userName, password) => {
    let user = { userName: '', email: '' };

    try {
      const data = await Api.users.loginRequest(userName, password);
      setLoading(true);
      console.log(data);
      user = { userName: data.userName, email: data.email };
    } catch (error) {
      setLoading(false);
    }

    return user;
  };

  return (
    <div className='login-box'>
      <div className='login-box__card'>
        <div className='login-box__card-header'>
          <span>Welcome to</span>
          <span>Yummi Pizza</span>
        </div>
        <div className='login-box__card-body'>
          {!loading ? (
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
          ) : (
            <Spinner />
          )}
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
