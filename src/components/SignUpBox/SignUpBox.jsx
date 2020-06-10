import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions';
import Api from '../../Api';
import Spinner from '../Spinner/Spinner';
import './SignUpBox.css';

const SignUpBox = (props) => {
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  const handleUserNameInputChange = (event) => {
    const userName = event.target.value;
    setUserData({ ...userData, userName: userName });
  };

  const handleEmailInputChange = (event) => {
    const email = event.target.value;
    setUserData({ ...userData, email: email });
  };

  const handlePasswordInputChange = (event) => {
    const password = event.target.value;
    setUserData({ ...userData, password: password });
  };

  const handlePasswordConfirmationInputChange = (event) => {
    const password = event.target.value;
    if (password !== userData.password) {
      setError(true);
    } else {
      setError(false);
    }

    setUserData({ ...userData, passwordConfirmation: password });
  };

  const handleCancelClick = () => {
    props.confirmSignUpRequest(false);
  };

  const handleRegisterClick = async () => {
    setLoading(true);

    const registeredUser = await apiSignUpRequest({
      userName: userData.userName,
      email: userData.email,
      password: userData.password,
    });

    if (registeredUser.userName !== '') {
      props.loginRequest(registeredUser);
    }
  };

  const apiSignUpRequest = async (user) => {
    let data = {};
    try {
      data = await Api.users.create(user);
      setLoading(true);
    } catch (error) {
      setLoading(false);
    }
    return data;
  };

  return (
    <div className='signup-box'>
      <div className='signup-box__card'>
        <div className='signup-box__card-header'>
          <span>Welcome to</span>
          <span>Yummi Pizza</span>
        </div>
        <div className='signup-box__card-body'>
          {!loading ? (
            <form>
              <div className='signup-input-wrapper'>
                <input
                  className='signup-input'
                  type='text'
                  name='user'
                  id='user'
                  placeholder='Insert your username'
                  onChange={handleUserNameInputChange}
                />
                <input
                  className='signup-input'
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Insert your email'
                  onChange={handleEmailInputChange}
                />
                <input
                  className='signup-input'
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Insert your password'
                  onChange={handlePasswordInputChange}
                />
                {userData.password && (
                  <input
                    className={`signup-input ${error ? 'wrong-input' : ''}`}
                    type='password'
                    name='password-confirmation'
                    id='password-confirmation'
                    placeholder='Confirm your password'
                    onChange={handlePasswordConfirmationInputChange}
                  />
                )}
              </div>
            </form>
          ) : (
            <Spinner />
          )}
        </div>
        <div className='signup-box__card-footer'>
          <button
            className='footer-card__signup-button footer-card__signup-button--cancel'
            onClick={handleCancelClick}
          >
            cancel
          </button>
          <button
            className='footer-card__signup-button footer-card__signup-button--signup'
            onClick={handleRegisterClick}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(SignUpBox);
