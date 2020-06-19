import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logoutRequest, loginRequest } from '../../actions';

import './SignUp.css';
import SignUpBox from '../SignUpBox/SignUpBox';

const SignUp = (props) => {
  const [showSignUpBox, setShowSignUpBox] = useState(false);

  const handleSignUpRequest = () => {
    setShowSignUpBox(true);
  };

  const confirmSignUpRequest = (isConfirmed) => {
    setShowSignUpBox(false);
  };

  return (
    <div className='signup-area'>
      <div onClick={handleSignUpRequest}>
        <span className='signup-text'>SignUp</span>
      </div>
      {showSignUpBox && (
        <div className='signup-dialog'>
          <SignUpBox confirmSignUpRequest={confirmSignUpRequest} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
