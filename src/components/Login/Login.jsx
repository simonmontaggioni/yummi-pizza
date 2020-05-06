import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../../actions';

import { gravatar } from '../../utils';
import userIcon from '../../assets/static/icons/user-icon.svg';
import './Login.css';

const Login = (props) => {
  const { user } = props;
  if (user) {
    user.email = 'email@email.com';
  }
  const isUserLogged = false; //Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <div className='login'>
      <div className='login-description'>
        <span className='login-description__item'>
          {isUserLogged ? user.email : ''}
        </span>
        <span className='login-description__item'>
          {isUserLogged ? (
            <span onClick={handleLogout}>Log Out</span>
          ) : (
            <Link to='/'>
              <span>Log In</span>
            </Link>
          )}
        </span>
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
