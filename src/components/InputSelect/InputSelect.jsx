import React from 'react';
import './InputSelect.css';

const InputSelect = (props) => {
  const handleInputChange = (event) => {
    props.onInputChange(event.target);
  };

  const optionList = props.options.map((option) => (
    <option
      className='custom-select__option'
      key={option}
      value={option}
      disabled={option.includes('Choose ') ? true : false}
    >
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
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          onChange={handleInputChange}
          value={props.selected}
        >
          <option
            className='custom-select__option'
            key={props.placeholder}
            value={props.placeholder}
            disabled={true}
          >
            {props.placeholder}
          </option>
          {optionList}
        </select>
      </div>
    </div>
  );
};
export default InputSelect;
