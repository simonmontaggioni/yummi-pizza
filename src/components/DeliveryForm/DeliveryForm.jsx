import React from 'react';
import { connect } from 'react-redux';
import { setDeliveryData } from '../../actions';
import './DeliveryForm.css';
import InputSelect from '../InputSelect/InputSelect';
import InputField from '../InputField/InputField';

const city = {
  id: 'city',
  options: ['city 1', 'city 2', 'city 3', 'city 4', 'city 5'],
  placeholder: 'Choose your city',
  label: 'city',
  readOnly: true,
};
const street = {
  id: 'street',
  options: ['street 1', 'street 2', 'street 3', 'street 4', 'street 5'],
  placeholder: 'Choose your street',
  label: 'street',
  readOnly: true,
};
const municipallity = {
  id: 'municipallity',
  options: [
    'municipallity 1',
    'municipallity 2',
    'municipallity 3',
    'municipallity 4',
    'municipallity 5',
  ],
  placeholder: 'Choose your municipallity',
  label: 'municipallity',
  readOnly: true,
};
const parish = {
  id: 'parish',
  options: ['parish 1', 'parish 2', 'parish 3', 'parish 4', 'parish 5'],
  placeholder: 'Choose your parish',
  label: 'parish',
  readOnly: true,
};
const address = {
  id: 'address',
  options: ['address 1', 'address 2', 'address 3', 'address 4', 'address 5'],
  placeholder: 'Choose your address',
  label: 'address',
  readOnly: true,
};

const name = {
  label: 'name',
  id: 'name',
  name: 'name',
  value: '',
  placeholder: 'your name',
  readOnly: false,
};
const lastName = {
  label: 'lastName',
  id: 'last-name',
  name: 'last-name',
  value: '',
  placeholder: 'your last name',
  readOnly: false,
};
const postalCode = {
  label: 'postal-code',
  id: 'postal-code',
  name: 'postal-code',
  value: '',
  placeholder: 'postal code',
  readOnly: false,
};

const DeliveryForm = (props) => {
  let deliveryData = props.deliveryData;

  const handleInputChange = (e) => {
    switch (e.id) {
      case 'name':
        deliveryData.name = e.value;
        break;
      case 'last-name':
        deliveryData.lastName = e.value;
        break;
      case 'municipallity':
        deliveryData.municipallity = e.value;
        break;
      case 'city':
        deliveryData.city = e.value;
        break;
      case 'parish':
        deliveryData.parish = e.value;
        break;
      case 'postal-code':
        deliveryData.postalCode = e.value;
        break;
      case 'street':
        deliveryData.street = e.value;
        break;
      case 'address':
        deliveryData.address = e.value;
        break;
      default:
        break;
    }
    props.setDeliveryData(deliveryData);
  };

  return (
    <div className='delivery-form'>
      <div className='delivery-form__title'>
        <h2>delivery form</h2>
      </div>
      <div className='name'>
        <InputField
          label={name.label}
          id={name.id}
          name={name.name}
          value={props.deliveryData.name}
          placeholder={name.placeholder}
          readOnly={name.readOnly}
          onInputChange={handleInputChange}
        />
      </div>
      <div className='last-name'>
        <InputField
          label={lastName.label}
          id={lastName.id}
          name={lastName.name}
          value={props.deliveryData.lastName}
          placeholder={lastName.placeholder}
          readOnly={lastName.readOnly}
          onInputChange={handleInputChange}
        />
      </div>
      <div className='city'>
        <InputSelect
          id={city.id}
          options={city.options}
          label={city.label}
          selected={
            props.deliveryData.city === ''
              ? city.placeholder
              : props.deliveryData.city
          }
          placeholder={city.placeholder}
          onInputChange={handleInputChange}
        />
      </div>
      <div className='street'>
        <InputSelect
          id={street.id}
          options={street.options}
          label={street.label}
          selected={
            props.deliveryData.street === ''
              ? street.placeholder
              : props.deliveryData.street
          }
          placeholder={street.placeholder}
          onInputChange={handleInputChange}
        />
      </div>
      <div className='postal-code'>
        <InputField
          label={postalCode.label}
          id={postalCode.id}
          name={postalCode.name}
          value={props.deliveryData.postalCode}
          placeholder={postalCode.placeholder}
          readOnly={postalCode.readOnly}
          onInputChange={handleInputChange}
        />
      </div>
      <div className='municipallity'>
        <InputSelect
          id={municipallity.id}
          options={municipallity.options}
          label={municipallity.label}
          selected={
            props.deliveryData.municipallity === ''
              ? municipallity.placeholder
              : props.deliveryData.municipallity
          }
          placeholder={municipallity.placeholder}
          onInputChange={handleInputChange}
        />
      </div>
      <div className='address-number'>
        <InputSelect
          id={address.id}
          options={address.options}
          label={address.label}
          selected={
            props.deliveryData.address === ''
              ? address.placeholder
              : props.deliveryData.address
          }
          placeholder={address.placeholder}
          onInputChange={handleInputChange}
        />
      </div>
      <div className='parish'>
        <InputSelect
          id={parish.id}
          options={parish.options}
          label={parish.label}
          selected={
            props.deliveryData.parish === ''
              ? parish.placeholder
              : props.deliveryData.parish
          }
          placeholder={parish.placeholder}
          onInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  setDeliveryData,
};

const mapStateToProps = (state) => {
  return {
    deliveryData: state.deliveryData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryForm);
