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
  const [errors, setErrors] = useState({
    userName: userData.userName === false ? true : false,
    email: userData.email === false ? true : false,
    password: userData.password === false ? true : false,
    passwordConfirmation:
      userData.passwordConfirmation === false ? true : false,
  });

  const handleUserNameInputChange = (event) => {
    const userName = event.target.value;
    const regex = /[a-z]{4}/gim;
    const isValidInput = validateString(event.target.value, regex);
    if (isValidInput) {
      setUserData({ ...userData, userName: userName });
      setErrors({ ...errors, userName: false });
    } else {
      setErrors({ ...errors, userName: true });
    }
  };

  const handleEmailInputChange = (event) => {
    const email = event.target.value;
    const regex = /[\S]*@[\S]*\.[\S]{1,}/gim;
    const isValidInput = validateString(event.target.value, regex);
    if (isValidInput) {
      setUserData({ ...userData, email: email });
      setErrors({ ...errors, email: false });
    } else {
      setErrors({ ...errors, email: true });
    }
  };

  const handlePasswordInputChange = (event) => {
    const password = event.target.value;
    const regex = /[\S]{5}/gim;
    const isValidInput = validateString(event.target.value, regex);
    if (isValidInput) {
      setUserData({ ...userData, password: password });
      setErrors({ ...errors, password: false });
    } else {
      setErrors({ ...errors, password: true });
    }
  };

  const handlePasswordConfirmationInputChange = (event) => {
    const password = event.target.value;
    if (password !== userData.password) {
      setErrors({ ...errors, passwordConfirmation: true });
    } else {
      setErrors({ ...errors, passwordConfirmation: false });
    }

    setUserData({ ...userData, passwordConfirmation: password });
  };

  const validateString = (inputString, regex) => {
    const validation = inputString.match(regex);
    if (validation !== null) {
      return true;
    } else {
      return false;
    }
  };

  const validateForm = () => {
    return errors.userName ||
      errors.email ||
      errors.password ||
      errors.passwordConfirmation ||
      userData.userName === '' ||
      userData.email === '' ||
      userData.password === '' ||
      userData.passwordConfirmation === ''
      ? true
      : false;
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
                  className={`signup-input ${
                    errors.userName ? 'wrong-input' : ''
                  }`}
                  type='text'
                  name='user'
                  id='user'
                  placeholder='Insert your username'
                  onChange={handleUserNameInputChange}
                />
                <input
                  className={`signup-input ${
                    errors.email ? 'wrong-input' : ''
                  }`}
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Insert your email'
                  onChange={handleEmailInputChange}
                />
                <input
                  className={`signup-input ${
                    errors.password ? 'wrong-input' : ''
                  }`}
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Insert your password'
                  onChange={handlePasswordInputChange}
                />
                {userData.password && (
                  <input
                    className={`signup-input ${
                      errors.passwordConfirmation ? 'wrong-input' : ''
                    }`}
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
            disabled={validateForm() ? true : false}
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
