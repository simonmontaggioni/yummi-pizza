import React from 'react';
import './InputField.css';

const InputField = (props) => {
  const handleInputChange = (event) => {
    props.onInputChange(event.target);
  };

  return (
    <div className='custom-input'>
      <div className='custom-input__label-wrapper'>
        <label className='custom-input__label' htmlFor={props.id}>
          {props.label}
        </label>
      </div>
      <div className='input-wrapper'>
        <input
          className='custom-input__field'
          id={props.id}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
export default InputField;
