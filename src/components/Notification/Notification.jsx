import React from 'react';
import './Notification.css';

const Notification = (props) => {
  return (
    <div className='notification'>
      <div>{props.text}</div>
    </div>
  );
};

export default Notification;
