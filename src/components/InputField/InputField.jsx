import React from 'react';
import './InputField.css';

const InputField = (props) => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className='custom-input'>
      <label className='custom-input__label' htmlFor={props.id}>
        {props.label}
      </label>
      <div className='input-wrapper'>
        <input
          className='custom-input__field'
          id={props.id}
          name={props.name}
          //   value={props.value}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export default InputField;
