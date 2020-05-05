import React from 'react';
import './InputSelect.css';

const InputSelect = (props) => {
  const handleInputChange = (event) => {
    props.onInputChange(event.target);
  };

  const optionList = props.options.map((option) => (
    <option className='custom-select__option' key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <div className='custom-select'>
      <div className='custom-select__label-wrapper'>
        <label className='custom-select__label' htmlFor={props.id}>
          {props.label}
        </label>
      </div>
      <div className='select-wrapper'>
        <select
          className='custom-select__input'
          id={props.id}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          onChange={handleInputChange}
        >
          {optionList}
        </select>
      </div>
    </div>
  );
};
export default InputSelect;
